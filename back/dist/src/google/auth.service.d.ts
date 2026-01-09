import { JwtService } from '@nestjs/jwt';
import * as schema from '../../schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
export declare class AuthService {
    private db;
    private jwtService;
    constructor(db: NodePgDatabase<typeof schema>, jwtService: JwtService);
    googleLogin(req: any): Promise<{
        message: string;
        user?: undefined;
        accessToken?: undefined;
    } | {
        message: string;
        user: {
            id: string;
            email: string | null;
            firstName: string;
            lastName: string;
            picture: string | null;
        };
        accessToken: string;
    }>;
    validateUserById(userId: string): Promise<{
        id: string;
        googleId: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        provider: string | null;
        picture: string | null;
        email: string | null;
        password: string | null;
        location: [number, number] | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProfile(userId: string): Promise<{
        id: string;
        email: string | null;
        firstName: string;
        lastName: string;
        picture: string | null;
        createdAt: Date;
    } | null>;
}
