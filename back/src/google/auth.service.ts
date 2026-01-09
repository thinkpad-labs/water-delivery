import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { eq } from 'drizzle-orm';
import { DatabaseAsyncProvider } from 'src/database/database.service';
import * as schema from '../../schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class AuthService {
    constructor(
        @Inject(DatabaseAsyncProvider) private db: NodePgDatabase<typeof schema>,
        private jwtService: JwtService,
    ) { }

    async googleLogin(req: any) {
        if (!req.user) {
            return { message: 'No user from google' };
        }

        const { googleId, email, firstName, lastName, picture } = req.user;

        // Check if user exists
        const existingUsers = await this.db
            .select()
            .from(schema.users)
            .where(eq(schema.users.googleId, googleId))
            .limit(1);

        let user = existingUsers[0];

        // If user doesn't exist, create new user
        if (!user) {
            const newUsers = await this.db
                .insert(schema.users)
                .values({
                    googleId,
                    email,
                    firstName,
                    lastName,
                    picture,
                    provider: 'google',
                })
                .returning();
            user = newUsers[0];
        } else {
            // Update user info if needed
            const updatedUsers = await this.db
                .update(schema.users)
                .set({
                    firstName,
                    lastName,
                    picture,
                    updatedAt: new Date(),
                })
                .where(eq(schema.users.id, user.id))
                .returning();
            user = updatedUsers[0];
        }

        // Generate JWT token
        const payload = { email: user.email, sub: user.id };
        const accessToken = this.jwtService.sign(payload);

        return {
            message: 'User information from google',
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                picture: user.picture,
            },
            accessToken,
        };
    }

    async validateUserById(userId: string) {
        const users = await this.db
            .select()
            .from(schema.users)
            .where(eq(schema.users.id, userId))
            .limit(1);

        return users[0] || null;
    }

    async getProfile(userId: string) {
        const users = await this.db
            .select()
            .from(schema.users)
            .where(eq(schema.users.id, userId))
            .limit(1);

        const user = users[0];

        if (!user) {
            return null;
        }

        return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            picture: user.picture,
            createdAt: user.createdAt,
        };
    }
}   