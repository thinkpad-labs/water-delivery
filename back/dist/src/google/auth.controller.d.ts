import { AuthService } from './auth.service';
import type { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any, res: Response): Promise<void>;
    getProfile(req: any): Promise<{
        id: string;
        email: string | null;
        firstName: string;
        lastName: string;
        picture: string | null;
        createdAt: Date;
    } | null>;
    getStatus(req: any): Promise<{
        authenticated: boolean;
        user: any;
    }>;
}
