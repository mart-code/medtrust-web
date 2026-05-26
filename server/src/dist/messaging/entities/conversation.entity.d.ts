import { MessageChannel } from '../../common/enums';
import { Message } from './message.entity';
export declare class Conversation {
    id: string;
    channel: MessageChannel;
    patientId: string;
    doctorId: string;
    programmeId: string;
    createdAt: Date;
    messages: Message[];
}
