import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrganisationProfile } from '../../organisations/entities/organisation-profile.entity';
import { ApprovalStatus, ProgrammeStatus } from '../../common/enums';
import { ProgrammeEnrollment } from './programme-enrollment.entity';

@Entity('programmes')
export class Programme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => OrganisationProfile, (o) => o.programmes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'organisationId' })
  organisation: OrganisationProfile;

  @Column()
  organisationId: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  bannerUrl: string;

  @Column({
    type: 'enum',
    enum: ProgrammeStatus,
    default: ProgrammeStatus.DRAFT,
  })
  status: ProgrammeStatus;

  @Column({ type: 'date', nullable: true })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ nullable: true })
  maxParticipants: number;

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

  @OneToMany(() => ProgrammeEnrollment, (e) => e.programme)
  enrollments: ProgrammeEnrollment[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
