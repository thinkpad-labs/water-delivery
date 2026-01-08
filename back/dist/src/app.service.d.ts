import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { schema } from 'schema';
export declare class AppService {
    private db;
    constructor(db: NodePgDatabase<typeof schema>);
    getHello(): import("drizzle-orm/pg-core/query-builders/query").PgRelationalQuery<{
        id: string;
        email: string | null;
        role_id: number | null;
    }[]>;
}
