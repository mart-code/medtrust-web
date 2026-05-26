import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { DataSource, Repository } from 'typeorm';
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
export interface AuthenticatedUserResponse {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    isAdmin: boolean;
    isEmailVerified: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    profile: unknown;
}
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}
export interface AuthResult {
    user: AuthenticatedUserResponse;
    tokens: AuthTokens;
}
export declare class AuthService {
    private dataSource;
    private jwtService;
    private config;
    private usersService;
    private userRepo;
    private patientRepo;
    private doctorRepo;
    private orgRepo;
    private institutionRepo;
    private institutionProfileRepo;
    private superAdminRepo;
    constructor(dataSource: DataSource, jwtService: JwtService, config: ConfigService, usersService: UsersService, userRepo: Repository<User>, patientRepo: Repository<PatientProfile>, doctorRepo: Repository<DoctorProfile>, orgRepo: Repository<OrganisationProfile>, institutionRepo: Repository<MedicalInstitution>, institutionProfileRepo: Repository<InstitutionProfile>, superAdminRepo: Repository<SuperAdminProfile>);
    register(dto: RegisterDto): Promise<AuthResult>;
    login(dto: LoginDto): Promise<AuthResult>;
    refresh(refreshToken: string): Promise<AuthResult>;
    logout(refreshToken: string): Promise<void>;
    getMe(userId: string): Promise<AuthenticatedUserResponse>;
    private buildAuthenticatedUser;
    private buildAuthResult;
    private generateTokens;
    private resolveUserDisplayName;
    private hasFirstAndLastName;
    private hasName;
    private hasInstitution;
}
