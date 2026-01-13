"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.ordersRelations = exports.billsRelations = exports.distributorBrandRelations = exports.brandsRelations = exports.distributorsRelations = exports.consumersRelations = exports.usersRelations = exports.orders = exports.bills = exports.distributorBrand = exports.brands = exports.distributors = exports.consumers = exports.users = exports.logs = exports.paymentMethodEnum = exports.orderStatusEnum = exports.distributorStatusEnum = exports.consumerStatusEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.consumerStatusEnum = (0, pg_core_1.pgEnum)('consumer_status', [
    'active',
    'inactive',
    'banned',
]);
exports.distributorStatusEnum = (0, pg_core_1.pgEnum)('distributor_status', [
    'active',
    'inactive',
    'pending',
]);
exports.orderStatusEnum = (0, pg_core_1.pgEnum)('order_status', [
    'pending',
    'delivered',
    'cancelled',
]);
exports.paymentMethodEnum = (0, pg_core_1.pgEnum)('payment_method', [
    'cash',
    'card',
    'online',
]);
exports.logs = (0, pg_core_1.pgTable)('logs', {
    id: (0, pg_core_1.uuid)('id').primaryKey(),
    body: (0, pg_core_1.jsonb)('body').notNull(),
});
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    googleId: (0, pg_core_1.varchar)('google_id', { length: 255 }).unique(),
    firstName: (0, pg_core_1.text)('first_name'),
    lastName: (0, pg_core_1.text)('last_name'),
    phone: (0, pg_core_1.varchar)('phone'),
    provider: (0, pg_core_1.text)('provider'),
    picture: (0, pg_core_1.varchar)('picture', { length: 500 }),
    email: (0, pg_core_1.text)('email'),
    password: (0, pg_core_1.varchar)('password'),
    location: (0, pg_core_1.point)('location', { mode: 'xy' }),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)('updated_at').defaultNow().notNull(),
});
exports.consumers = (0, pg_core_1.pgTable)('consumers', {
    id: (0, pg_core_1.uuid)('id').primaryKey(),
    user_id: (0, pg_core_1.uuid)('user_id').references(() => exports.users.id),
    status: (0, exports.consumerStatusEnum)('status'),
});
exports.distributors = (0, pg_core_1.pgTable)('distributors', {
    id: (0, pg_core_1.uuid)('id').primaryKey(),
    user_id: (0, pg_core_1.uuid)('user_id').references(() => exports.users.id),
    status: (0, exports.distributorStatusEnum)('status'),
});
exports.brands = (0, pg_core_1.pgTable)('brands', {
    id: (0, pg_core_1.uuid)('id').primaryKey(),
    name: (0, pg_core_1.text)('name').notNull(),
});
exports.distributorBrand = (0, pg_core_1.pgTable)('distributor_brand', {
    distributor_id: (0, pg_core_1.uuid)('distributor_id').references(() => exports.distributors.id),
    brand_id: (0, pg_core_1.uuid)('brand_id').references(() => exports.brands.id),
    price: (0, pg_core_1.real)('price').notNull(),
});
exports.bills = (0, pg_core_1.pgTable)('bills', {
    id: (0, pg_core_1.uuid)('id').primaryKey(),
    distributor_id: (0, pg_core_1.uuid)('distributor_id').references(() => exports.distributors.id),
    brand_id: (0, pg_core_1.uuid)('brand_id').references(() => exports.brands.id),
    count: (0, pg_core_1.integer)('count').notNull(),
    price: (0, pg_core_1.real)('price').notNull(),
    payment_method: (0, exports.paymentMethodEnum)('payment_method').notNull(),
});
exports.orders = (0, pg_core_1.pgTable)('orders', {
    id: (0, pg_core_1.uuid)('id').primaryKey(),
    consumer_id: (0, pg_core_1.uuid)('consumer_id').references(() => exports.consumers.id),
    bill_id: (0, pg_core_1.uuid)('bill_id').references(() => exports.bills.id),
    status: (0, exports.orderStatusEnum)('status'),
});
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users, ({ one }) => ({
    consumer: one(exports.consumers, {
        fields: [exports.users.id],
        references: [exports.consumers.user_id],
    }),
    distributor: one(exports.distributors, {
        fields: [exports.users.id],
        references: [exports.distributors.user_id],
    }),
}));
exports.consumersRelations = (0, drizzle_orm_1.relations)(exports.consumers, ({ one, many }) => ({
    user: one(exports.users, {
        fields: [exports.consumers.user_id],
        references: [exports.users.id],
    }),
    orders: many(exports.orders),
}));
exports.distributorsRelations = (0, drizzle_orm_1.relations)(exports.distributors, ({ one, many }) => ({
    user: one(exports.users, {
        fields: [exports.distributors.user_id],
        references: [exports.users.id],
    }),
    distributorBrands: many(exports.distributorBrand),
    bills: many(exports.bills),
}));
exports.brandsRelations = (0, drizzle_orm_1.relations)(exports.brands, ({ many }) => ({
    distributorBrands: many(exports.distributorBrand),
    bills: many(exports.bills),
}));
exports.distributorBrandRelations = (0, drizzle_orm_1.relations)(exports.distributorBrand, ({ one }) => ({
    distributor: one(exports.distributors, {
        fields: [exports.distributorBrand.distributor_id],
        references: [exports.distributors.id],
    }),
    brand: one(exports.brands, {
        fields: [exports.distributorBrand.brand_id],
        references: [exports.brands.id],
    }),
}));
exports.billsRelations = (0, drizzle_orm_1.relations)(exports.bills, ({ one, many }) => ({
    distributor: one(exports.distributors, {
        fields: [exports.bills.distributor_id],
        references: [exports.distributors.id],
    }),
    brand: one(exports.brands, {
        fields: [exports.bills.brand_id],
        references: [exports.brands.id],
    }),
    order: one(exports.orders, {
        fields: [exports.bills.id],
        references: [exports.orders.bill_id],
    }),
}));
exports.ordersRelations = (0, drizzle_orm_1.relations)(exports.orders, ({ one }) => ({
    consumer: one(exports.consumers, {
        fields: [exports.orders.consumer_id],
        references: [exports.consumers.id],
    }),
    bill: one(exports.bills, {
        fields: [exports.orders.bill_id],
        references: [exports.bills.id],
    }),
}));
exports.schema = {
    consumerStatusEnum: exports.consumerStatusEnum,
    distributorStatusEnum: exports.distributorStatusEnum,
    orderStatusEnum: exports.orderStatusEnum,
    paymentMethodEnum: exports.paymentMethodEnum,
    logs: exports.logs,
    users: exports.users,
    consumers: exports.consumers,
    distributors: exports.distributors,
    brands: exports.brands,
    distributorBrand: exports.distributorBrand,
    bills: exports.bills,
    orders: exports.orders,
    usersRelations: exports.usersRelations,
    consumersRelations: exports.consumersRelations,
    distributorsRelations: exports.distributorsRelations,
    brandsRelations: exports.brandsRelations,
    distributorBrandRelations: exports.distributorBrandRelations,
    billsRelations: exports.billsRelations,
    ordersRelations: exports.ordersRelations,
};
//# sourceMappingURL=schema.js.map