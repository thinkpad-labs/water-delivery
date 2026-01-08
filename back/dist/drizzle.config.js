"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    schema: './schema.ts',
    out: './src/database/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
    verbose: true,
};
//# sourceMappingURL=drizzle.config.js.map