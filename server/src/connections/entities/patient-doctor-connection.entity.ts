import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { PatientProfile } from '../../patients/entities/patient-profile.entity';
import { DoctorProfile } from '../../doctors/entities/doctor-profile.entity';
import { ConnectionStatus } from '../../common/enums';

@Entity('patient_doctor_connections')
export class PatientDoctorConnection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => PatientProfile, (p) => p.connections, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patientId' })
  patient: PatientProfile;

  @Column()
  patientId: string;

  @ManyToOne(() => DoctorProfile, (d) => d.connections, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctorId' })
  doctor: DoctorProfile;

  @Column()
  doctorId: string;

  @Column({
    type: 'enum',
    enum: ConnectionStatus,
    default: ConnectionStatus.PENDING,
  })
  status: ConnectionStatus;

  @CreateDateColumn({ type: 'timestamptz' })
  requestedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  respondedAt: Date;

  @Column({ type: 'text', nullable: true })
  notes: string;
}
