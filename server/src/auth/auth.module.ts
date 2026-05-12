import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { User } from '../users/entities/user.entity';
import { PatientProfile } from '../patients/entities/patient-profile.entity';
import { DoctorProfile } from '../doctors/entities/doctor-profile.entity';
import { OrganisationProfile } from '../organisations/entities/organisation-profile.entity';
import { MedicalInstitution } from '../institutions/entities/medical-institution.entity';
import { InstitutionProfile } from '../institutions/entities/institution-profile.entity';
import { SuperAdminProfile } from '../institutions/entities/super-admin-profile.entity';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    JwtModule.register({}),
    UsersModule,
    TypeOrmModule.forFeature([
      User,
      PatientProfile,
      DoctorProfile,
      OrganisationProfile,
      MedicalInstitution,
      InstitutionProfile,
      SuperAdminProfile,
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
