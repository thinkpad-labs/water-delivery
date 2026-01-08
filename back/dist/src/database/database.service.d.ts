import { ConfigService } from '@nestjs/config';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
export declare const DatabaseAsyncProvider = "DATABASE_PROVIDER";
export declare const DATABASE_PROVIDER: {
    provide: string;
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => Promise<NodePgDatabase<{
        users: import("drizzle-orm/pg-core").PgTableWithColumns<{
            name: "users";
            schema: undefined;
            columns: {
                id: import("drizzle-orm/pg-core").PgColumn<{
                    name: "id";
                    tableName: "users";
                    dataType: "string";
                    columnType: "PgUUID";
                    data: string;
                    driverParam: string;
                    notNull: true;
                    hasDefault: true;
                    isPrimaryKey: true;
                    isAutoincrement: false;
                    hasRuntimeDefault: false;
                    enumValues: undefined;
                    baseColumn: never;
                    identity: undefined;
                    generated: undefined;
                }, {}, {}>;
                email: import("drizzle-orm/pg-core").PgColumn<{
                    name: "email";
                    tableName: "users";
                    dataType: "string";
                    columnType: "PgText";
                    data: string;
                    driverParam: string;
                    notNull: false;
                    hasDefault: false;
                    isPrimaryKey: false;
                    isAutoincrement: false;
                    hasRuntimeDefault: false;
                    enumValues: [string, ...string[]];
                    baseColumn: never;
                    identity: undefined;
                    generated: undefined;
                }, {}, {}>;
                role_id: import("drizzle-orm/pg-core").PgColumn<{
                    name: "role_id";
                    tableName: "users";
                    dataType: "number";
                    columnType: "PgInteger";
                    data: number;
                    driverParam: string | number;
                    notNull: false;
                    hasDefault: false;
                    isPrimaryKey: false;
                    isAutoincrement: false;
                    hasRuntimeDefault: false;
                    enumValues: undefined;
                    baseColumn: never;
                    identity: undefined;
                    generated: undefined;
                }, {}, {}>;
            };
            dialect: "pg";
        }>;
        user_role: import("drizzle-orm/pg-core").PgTableWithColumns<{
            name: "user_role";
            schema: undefined;
            columns: {
                id: import("drizzle-orm/pg-core").PgColumn<{
                    name: "id";
                    tableName: "user_role";
                    dataType: "number";
                    columnType: "PgSerial";
                    data: number;
                    driverParam: number;
                    notNull: true;
                    hasDefault: true;
                    isPrimaryKey: true;
                    isAutoincrement: false;
                    hasRuntimeDefault: false;
                    enumValues: undefined;
                    baseColumn: never;
                    identity: undefined;
                    generated: undefined;
                }, {}, {}>;
                name: import("drizzle-orm/pg-core").PgColumn<{
                    name: "name";
                    tableName: "user_role";
                    dataType: "string";
                    columnType: "PgText";
                    data: string;
                    driverParam: string;
                    notNull: false;
                    hasDefault: false;
                    isPrimaryKey: false;
                    isAutoincrement: false;
                    hasRuntimeDefault: false;
                    enumValues: [string, ...string[]];
                    baseColumn: never;
                    identity: undefined;
                    generated: undefined;
                }, {}, {}>;
            };
            dialect: "pg";
        }>;
        usersRelations: import("drizzle-orm").Relations<"users", {
            user_role: import("drizzle-orm").One<"user_role", false>;
        }>;
    }>>;
}[];
