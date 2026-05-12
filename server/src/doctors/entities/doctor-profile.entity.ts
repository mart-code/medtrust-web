import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ApprovalStatus } from '../../common/enums';
import { MedicalInstitution } from '../../institutions/entities/medical-institution.entity';
import { PatientDoctorConnection } from '../../connections/entities/patient-doctor-connection.entity';
import { ProgrammeEnrollment } from '../../programmes/entities/programme-enrollment.entity';

@Entity('doctor_profiles')
export class DoctorProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (u) => u.doctorProfile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  specialisation: string;

  @Column({ unique: true })
  licenseNumber: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ nullable: true })
  yearsOfExperience: number;

  @Column({ type: 'simple-array', nullable: true })
  expertiseTags: string[];

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

  @ManyToOne(() => MedicalInstitution, (i) => i.doctors, { nullable: true })
  @JoinColumn({ name: 'institutionId' })
  institution: MedicalInstitution;

  @Column({ nullable: true })
  institutionId: string;

  @OneToMany(() => PatientDoctorConnection, (c) => c.doctor)
  connections: PatientDoctorConnection[];

  @OneToMany(() => ProgrammeEnrollment, (e) => e.doctor)
  enrollments: ProgrammeEnrollment[];
}
