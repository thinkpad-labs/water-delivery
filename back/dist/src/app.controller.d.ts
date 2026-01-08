import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): import("drizzle-orm/pg-core/query-builders/query").PgRelationalQuery<{
        id: string;
        email: string | null;
        role_id: number | null;
    }[]>;
}
