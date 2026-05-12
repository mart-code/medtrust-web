import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  Index,
} from 'typeorm';
import { MessageChannel } from '../../common/enums';
import { Message } from './message.entity';

@Entity('conversations')
@Index(['patientId', 'doctorId'], { unique: true, where: '"channel" = \'direct\'' })
export class Conversation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: MessageChannel })
  channel: MessageChannel;

  @Column({ nullable: true })
  patientId: string;

  @Column({ nullable: true })
  doctorId: string;

  @Column({ nullable: true })
  programmeId: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @OneToMany(() => Message, (m) => m.conversation)
  messages: Message[];
}
