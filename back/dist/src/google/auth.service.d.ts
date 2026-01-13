import { JwtService } from '@nestjs/jwt';
import * as schema from '../../schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
export declare class AuthService {
    private db;
    private jwtService;
    getAllUsers(): import("drizzle-orm/pg-core/query-builders/query").PgRelationalQuery<{
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
            firstName: string | null;
            lastName: string | null;
            picture: string | null;
        };
        accessToken: string;
    }>;
    createUser(data: {
        email: string;
        password: string;
        firstName?: string;
        lastName?: string;
        picture?: string;
        phone?: string;
        location?: {
            x: number;
            y: number;
        };
        googleId?: string;
    }): Promise<{
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
    validateUserById(userId: string): Promise<{
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
    }>;
    getProfile(userId: string): Promise<{
        id: string;
        email: string | null;
        firstName: string | null;
        lastName: string | null;
        picture: string | null;
        createdAt: Date;
    } | null>;
}
