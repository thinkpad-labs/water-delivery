"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_PROVIDER = exports.DatabaseAsyncProvider = void 0;
const config_1 = require("@nestjs/config");
const pg_1 = require("pg");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const schema_1 = require("../../schema");
exports.DatabaseAsyncProvider = 'DATABASE_PROVIDER';
exports.DATABASE_PROVIDER = [
    {
        provide: exports.DatabaseAsyncProvider,
        inject: [config_1.ConfigService],
        useFactory: async (configService) => {
            const connectionString = configService.get('DATABASE_URL');
            const pool = new pg_1.Pool({
                connectionString,
            });
            return (0, node_postgres_1.drizzle)(pool, { schema: schema_1.schema });
        },
    },
];
//# sourceMappingURL=database.service.js.map