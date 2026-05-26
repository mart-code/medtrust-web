import { Conversation } from './conversation.entity';
export declare class Message {
    id: string;
    conversation: Conversation;
    conversationId: string;
    senderId: string;
    content: string;
    attachmentUrl: string;
    isAnnouncement: boolean;
    readAt: Date;
    createdAt: Date;
}
