import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { MedicalInstitution } from './medical-institution.entity';

@Entity('institution_profiles')
export class InstitutionProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (u) => u.institutionProfile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => MedicalInstitution, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'institutionId' })
  institution: MedicalInstitution;

  @Column()
  institutionId: string;
}
