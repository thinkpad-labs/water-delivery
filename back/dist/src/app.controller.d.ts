import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): import("drizzle-orm/pg-core/query-builders/query").PgRelationalQuery<{
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
    }[]>;
}
