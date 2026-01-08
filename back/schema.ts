import {
  integer,
  uuid,
  text,
  pgTable,
  pgEnum,
  jsonb,
  real,
  varchar,
  point,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ===== Enums from ERD =====
// The ERD shows 'ENUM' for status in multiple places.
// We create specific enums for each context or a shared one if they share values.
export const consumerStatusEnum = pgEnum('consumer_status', [
  'active',
  'inactive',
  'banned',
]);
export const distributorStatusEnum = pgEnum('distributor_status', [
  'active',
  'inactive',
  'pending',
]);
export const orderStatusEnum = pgEnum('order_status', [
  'pending',
  'delivered',
  'cancelled',
]);
export const paymentMethodEnum = pgEnum('payment_method', [
  'cash',
  'card',
  'online',
]);

// ===== Tables from ERD =====

// 1. logs table
export const logs = pgTable('logs', {
  id: uuid('id').primaryKey(),
  body: jsonb('body').notNull(),
});
// 2. users table
export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  phone: varchar('phone').notNull(),
  email: text('email'),
  password: varchar('password').notNull(),
  location: point('location'), // Mapped 'GIS' to Postgres 'point' (x,y)
});

// 3. consumers table
export const consumers = pgTable('consumers', {
  id: uuid('id').primaryKey(),
  user_id: uuid('user_id').references(() => users.id),
  status: consumerStatusEnum('status'),
});

// 4. distributors table
export const distributors = pgTable('distributors', {
  id: uuid('id').primaryKey(),
  user_id: uuid('user_id').references(() => users.id),
  status: distributorStatusEnum('status'),
});

// 5. brands table
export const brands = pgTable('brands', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
});

// 6. distributor_brand table
// The ERD shows this as a join table with no explicit 'id' uuid primary key,
// just FKs and price.
export const distributorBrand = pgTable('distributor_brand', {
  distributor_id: uuid('distributor_id').references(() => distributors.id),
  brand_id: uuid('brand_id').references(() => brands.id),
  price: real('price').notNull(),
});

// 7. bills table
export const bills = pgTable('bills', {
  id: uuid('id').primaryKey(),
  distributor_id: uuid('distributor_id').references(() => distributors.id),
  brand_id: uuid('brand_id').references(() => brands.id),
  count: integer('count').notNull(),
  price: real('price').notNull(),
  payment_method: paymentMethodEnum('payment_method').notNull(),
});

// 8. orders table
export const orders = pgTable('orders', {
  id: uuid('id').primaryKey(),
  consumer_id: uuid('consumer_id').references(() => consumers.id),
  bill_id: uuid('bill_id').references(() => bills.id),
  status: orderStatusEnum('status'),
});

// ===== Relations =====

export const usersRelations = relations(users, ({ one }) => ({
  consumer: one(consumers, {
    fields: [users.id],
    references: [consumers.user_id],
  }),
  distributor: one(distributors, {
    fields: [users.id],
    references: [distributors.user_id],
  }),
}));

export const consumersRelations = relations(consumers, ({ one, many }) => ({
  user: one(users, {
    fields: [consumers.user_id],
    references: [users.id],
  }),
  orders: many(orders),
}));

export const distributorsRelations = relations(
  distributors,
  ({ one, many }) => ({
    user: one(users, {
      fields: [distributors.user_id],
      references: [users.id],
    }),
    distributorBrands: many(distributorBrand),
    bills: many(bills),
  }),
);

export const brandsRelations = relations(brands, ({ many }) => ({
  distributorBrands: many(distributorBrand),
  bills: many(bills),
}));

export const distributorBrandRelations = relations(
  distributorBrand,
  ({ one }) => ({
    distributor: one(distributors, {
      fields: [distributorBrand.distributor_id],
      references: [distributors.id],
    }),
    brand: one(brands, {
      fields: [distributorBrand.brand_id],
      references: [brands.id],
    }),
  }),
);

export const billsRelations = relations(bills, ({ one, many }) => ({
  distributor: one(distributors, {
    fields: [bills.distributor_id],
    references: [distributors.id],
  }),
  brand: one(brands, {
    fields: [bills.brand_id],
    references: [brands.id],
  }),
  order: one(orders, {
    // shouldnt it be one to many ? one bill with many orders ?????
    // Assuming 1-to-1 or 1-to-many depending on logic, ERD implies Bill is generated for Order
    fields: [bills.id],
    references: [orders.bill_id],
  }),
}));

export const ordersRelations = relations(orders, ({ one }) => ({
  consumer: one(consumers, {
    fields: [orders.consumer_id],
    references: [consumers.id],
  }),
  bill: one(bills, {
    fields: [orders.bill_id],
    references: [bills.id],
  }),
}));
