"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.usersRelations = exports.user_role = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    email: (0, pg_core_1.text)('email').unique(),
    role_id: (0, pg_core_1.integer)('role_id'),
});
exports.user_role = (0, pg_core_1.pgTable)('user_role', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name'),
});
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users, ({ one }) => ({
    user_role: one(exports.user_role, {
        fields: [exports.users.role_id],
        references: [exports.user_role.id],
    }),
}));
exports.schema = {
    users: exports.users,
    user_role: exports.user_role,
    usersRelations: exports.usersRelations,
};
//# sourceMappingURL=schema.js.map