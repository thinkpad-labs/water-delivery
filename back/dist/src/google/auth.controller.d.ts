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
        firstName: string | null;
        lastName: string | null;
        picture: string | null;
        createdAt: Date;
    } | null>;
    getStatus(req: any): Promise<{
        authenticated: boolean;
        user: any;
    }>;
    login(payload: any): Promise<{
        message: string;
        user?: undefined;
        accessToken?: undefined;
    } | {
        message: string;
        user: {
            id: string;
            email: string | null;
            firstName: string | null;
            lastName: string | null;
            picture: string | null;
            phone: string | null;
            provider: string | null;
            location: {
                x: number;
                y: number;
            } | null;
        };
        accessToken: string;
    }>;
    getAll(): import("drizzle-orm/pg-core/query-builders/query").PgRelationalQuery<{
        id: string;
        googleId: string | null;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        provider: string | null;
        picture: string | null;
        email: string | null;
        password: string | null;
        location: {
            x: number;
            y: number;
        } | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
