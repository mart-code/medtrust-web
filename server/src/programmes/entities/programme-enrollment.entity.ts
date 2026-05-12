import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Programme } from './programme.entity';
import { PatientProfile } from '../../patients/entities/patient-profile.entity';
import { DoctorProfile } from '../../doctors/entities/doctor-profile.entity';
import { EnrolledByRole, EnrollmentStatus } from '../../common/enums';

@Entity('programme_enrollments')
export class ProgrammeEnrollment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Programme, (p) => p.enrollments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'programmeId' })
  programme: Programme;

  @Column()
  programmeId: string;

  @Column({ type: 'enum', enum: EnrolledByRole })
  enrolledByRole: EnrolledByRole;

  @ManyToOne(() => PatientProfile, (p) => p.enrollments, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patientId' })
  patient: PatientProfile;

  @Column({ nullable: true })
  patientId: string;

  @ManyToOne(() => DoctorProfile, (d) => d.enrollments, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctorId' })
  doctor: DoctorProfile;

  @Column({ nullable: true })
  doctorId: string;

  @CreateDateColumn({ type: 'timestamptz' })
  enrolledAt: Date;

  @Column({
    type: 'enum',
    enum: EnrollmentStatus,
    default: EnrollmentStatus.ACTIVE,
  })
  status: EnrollmentStatus;
}
