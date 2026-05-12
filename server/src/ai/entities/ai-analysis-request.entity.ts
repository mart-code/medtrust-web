import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { AiAnalysisType } from '../../common/enums';

@Entity('ai_analysis_requests')
export class AiAnalysisRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;

  @Column({ type: 'enum', enum: AiAnalysisType })
  type: AiAnalysisType;

  @Column({ type: 'text', nullable: true })
  inputText: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  imageCategory: string;

  @Column({ type: 'jsonb', nullable: true })
  response: Record<string, unknown>;

  @Column({ nullable: true })
  tokensUsed: number;

  @Column({ nullable: true })
  processingTimeMs: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}
