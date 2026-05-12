import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApprovalStatus, InstitutionType } from '../../common/enums';
import { DoctorProfile } from '../../doctors/entities/doctor-profile.entity';

@Entity('medical_institutions')
export class MedicalInstitution {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'decimal', precision: 10, scale: 8 })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 8 })
  longitude: number;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  logoUrl: string;

  @Column({
    type: 'enum',
    enum: InstitutionType,
    default: InstitutionType.CLINIC,
  })
  institutionType: InstitutionType;

  @Column({
    type: 'enum',
    enum: ApprovalStatus,
    default: ApprovalStatus.PENDING,
  })
  approvalStatus: ApprovalStatus;

  @Column({ type: 'timestamptz', nullable: true })
  approvedAt: Date;

  @Column({ nullable: true })
  approvedById: string;

  @Column()
  createdByUserId: string;

  @OneToMany(() => DoctorProfile, (d) => d.institution)
  doctors: DoctorProfile[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
