import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { PatientProfile } from '../patients/entities/patient-profile.entity';
import { DoctorProfile } from '../doctors/entities/doctor-profile.entity';
import { OrganisationProfile } from '../organisations/entities/organisation-profile.entity';
import { MedicalInstitution } from '../institutions/entities/medical-institution.entity';
import { InstitutionProfile } from '../institutions/entities/institution-profile.entity';
import { SuperAdminProfile } from '../institutions/entities/super-admin-profile.entity';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserRole } from '../common/enums';

@Injectable()
export class AuthService {
  constructor(
    private dataSource: DataSource,
    private jwtService: JwtService,
    private config: ConfigService,
    private usersService: UsersService,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(PatientProfile)
    private patientRepo: Repository<PatientProfile>,
    @InjectRepository(DoctorProfile)
    private doctorRepo: Repository<DoctorProfile>,
    @InjectRepository(OrganisationProfile)
    private orgRepo: Repository<OrganisationProfile>,
    @InjectRepository(MedicalInstitution)
    private institutionRepo: Repository<MedicalInstitution>,
    @InjectRepository(InstitutionProfile)
    private institutionProfileRepo: Repository<InstitutionProfile>,
    @InjectRepository(SuperAdminProfile)
    private superAdminRepo: Repository<SuperAdminProfile>,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new ConflictException('Email already registered');

    const passwordHash = await bcrypt.hash(dto.password, 12);

    const createdUser = await this.dataSource.transaction(async (manager) => {
      const user = manager.create(User, {
        email: dto.email,
        passwordHash,
        role: dto.role,
      });
      console.log(user);
      await manager.save(user);

      switch (dto.role) {
        case UserRole.PATIENT:
          await manager.save(
            manager.create(PatientProfile, {
              userId: user.id,
              firstName: dto.firstName ?? '',
              lastName: dto.lastName ?? '',
            }),
          );
          break;

        case UserRole.DOCTOR:
          if (!dto.licenseNumber)
            throw new BadRequestException('License number required for doctors');
          await manager.save(
            manager.create(DoctorProfile, {
              userId: user.id,
              firstName: dto.firstName ?? '',
              lastName: dto.lastName ?? '',
              specialisation: dto.specialisation ?? '',
              licenseNumber: dto.licenseNumber,
            }),
          );
          break;

        case UserRole.ORGANISATION:
          if (!dto.registrationNumber)
            throw new BadRequestException(
              'Registration number required for organisations',
            );
          await manager.save(
            manager.create(OrganisationProfile, {
              userId: user.id,
              name: dto.organisationName ?? '',
              registrationNumber: dto.registrationNumber,
            }),
          );
          break;

        case UserRole.INSTITUTION: {
          const institution = await manager.save(
            manager.create(MedicalInstitution, {
              name: dto.institutionName ?? '',
              address: dto.institutionAddress ?? '',
              latitude: dto.latitude ?? 0,
              longitude: dto.longitude ?? 0,
              createdByUserId: user.id,
            }),
          );
          await manager.save(
            manager.create(InstitutionProfile, {
              userId: user.id,
              institutionId: institution.id,
            }),
          );
          break;
        }

        case UserRole.SUPER_ADMIN:
          await manager.save(
            manager.create(SuperAdminProfile, {
              userId: user.id,
              firstName: dto.firstName ?? '',
              lastName: dto.lastName ?? '',
            }),
          );
          break;
      }

      return user;
    });

    return this.generateTokens(createdUser);
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user || !user.isActive)
      throw new UnauthorizedException('Invalid credentials');

    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    return this.generateTokens(user);
  }

  async refresh(refreshToken: string) {
    const stored = await this.usersService.findRefreshToken(refreshToken);
    if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    await this.usersService.revokeRefreshToken(refreshToken);
    const user = await this.userRepo.findOne({ where: { id: stored.userId } });
    if (!user) throw new UnauthorizedException();

    return this.generateTokens(user);
  }

  async logout(refreshToken: string) {
    await this.usersService.revokeRefreshToken(refreshToken);
  }

  async getMe(userId: string) {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) throw new UnauthorizedException();

    let profile: unknown = null;
    switch (user.role) {
      case UserRole.PATIENT:
        profile = await this.patientRepo.findOne({ where: { userId } });
        break;
      case UserRole.DOCTOR:
        profile = await this.doctorRepo.findOne({
          where: { userId },
          relations: ['institution'],
        });
        break;
      case UserRole.ORGANISATION:
        profile = await this.orgRepo.findOne({ where: { userId } });
        break;
      case UserRole.INSTITUTION:
        profile = await this.institutionProfileRepo.findOne({
          where: { userId },
          relations: ['institution'],
        });
        break;
      case UserRole.SUPER_ADMIN:
        profile = await this.superAdminRepo.findOne({ where: { userId } });
        break;
    }

    const { passwordHash: _, ...safeUser } = user;
    return { ...safeUser, profile };
  }

  private async generateTokens(user: User) {
    const payload = { sub: user.id, email: user.email, role: user.role };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jwtOpts: any = {
      secret: this.config.get<string>('jwt.secret'),
      expiresIn: this.config.get<string>('jwt.expiresIn') ?? '15m',
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jwtRefreshOpts: any = {
      secret: this.config.get<string>('jwt.refreshSecret'),
      expiresIn: this.config.get<string>('jwt.refreshExpiresIn') ?? '7d',
    };

    const accessToken = this.jwtService.sign(payload, jwtOpts);
    const refreshToken = this.jwtService.sign(payload, jwtRefreshOpts);

    const refreshExpiresInDays = 7;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + refreshExpiresInDays);
    await this.usersService.saveRefreshToken(user.id, refreshToken, expiresAt);

    return { accessToken, refreshToken, role: user.role };
  }
}
