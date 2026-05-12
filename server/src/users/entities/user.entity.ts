import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { UserRole } from '../../common/enums';
import { PatientProfile } from '../../patients/entities/patient-profile.entity';
import { DoctorProfile } from '../../doctors/entities/doctor-profile.entity';
import { OrganisationProfile } from '../../organisations/entities/organisation-profile.entity';
import { InstitutionProfile } from '../../institutions/entities/institution-profile.entity';
import { SuperAdminProfile } from '../../institutions/entities/super-admin-profile.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  emailVerificationToken: string;

  @Column({ nullable: true })
  passwordResetToken: string;

  @Column({ type: 'timestamptz', nullable: true })
  passwordResetExpiresAt: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @OneToOne(() => PatientProfile, (p) => p.user)
  patientProfile: PatientProfile;

  @OneToOne(() => DoctorProfile, (d) => d.user)
  doctorProfile: DoctorProfile;

  @OneToOne(() => OrganisationProfile, (o) => o.user)
  organisationProfile: OrganisationProfile;

  @OneToOne(() => InstitutionProfile, (i) => i.user)
  institutionProfile: InstitutionProfile;

  @OneToOne(() => SuperAdminProfile, (s) => s.user)
  superAdminProfile: SuperAdminProfile;
}
