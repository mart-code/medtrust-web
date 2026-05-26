import { User } from '../../users/entities/user.entity';
export declare class Notification {
    id: string;
    user: User;
    userId: string;
    type: string;
    title: string;
    body: string;
    isRead: boolean;
    metadata: Record<string, unknown>;
    createdAt: Date;
}
