import { Request, Response } from 'express';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto, res: Response): Promise<{
        user: import("./auth.service").AuthenticatedUserResponse;
    }>;
    login(dto: LoginDto, res: Response): Promise<{
        user: import("./auth.service").AuthenticatedUserResponse;
    }>;
    refresh(req: Request, res: Response): Promise<{
        user: import("./auth.service").AuthenticatedUserResponse;
    }>;
    logout(req: Request, res: Response): Promise<{
        success: boolean;
    }>;
    getMe(user: User): Promise<import("./auth.service").AuthenticatedUserResponse>;
    private setAuthCookies;
    private clearAuthCookies;
    private getCookieValue;
}
