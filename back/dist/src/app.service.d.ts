import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { schema } from 'schema';
export declare class AppService {
    private db;
    constructor(db: NodePgDatabase<typeof schema>);
    getHello(): import("drizzle-orm/pg-core/query-builders/query").PgRelationalQuery<{
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
