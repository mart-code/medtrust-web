import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RefreshToken } from './entities/refresh-token.entity';
export declare class UsersService {
    private userRepo;
    private refreshTokenRepo;
    constructor(userRepo: Repository<User>, refreshTokenRepo: Repository<RefreshToken>);
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    saveRefreshToken(userId: string, token: string, expiresAt: Date): Promise<RefreshToken>;
    findRefreshToken(token: string): Promise<RefreshToken | null>;
    revokeRefreshToken(token: string): Promise<void>;
    revokeAllUserRefreshTokens(userId: string): Promise<void>;
}
