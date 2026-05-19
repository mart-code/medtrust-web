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
  id?: string | null;

  @ManyToOne(() => PatientProfile, (p) => p.connections, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patientId' })  
  patient?: PatientProfile | null;

  @Column()
  patientId?: string | null;

  @ManyToOne(() => DoctorProfile, (d) => d.connections, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctorId' })
  doctor?: DoctorProfile | null;

  @Column()
  doctorId?: string | null;

  @Column({
    type: 'enum',
    enum: ConnectionStatus,
    default: ConnectionStatus.PENDING,
  })
  status?: ConnectionStatus | null;

  @CreateDateColumn({ type: 'timestamptz' })
  requestedAt?: Date | null;

  @Column({ type: 'timestamptz', nullable: true })
  respondedAt?: Date | null;

  @Column({ type: 'text', nullable: true })
  notes?: string | null;
}
