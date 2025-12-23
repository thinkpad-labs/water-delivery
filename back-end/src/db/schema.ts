import { geometry, integer, pgTable, text, varchar, customType, pgEnum } from "drizzle-orm/pg-core";

const point4326 = customType<{ data: string }>({
    dataType() {
        return "geometry(Point, 4326)";
    },
});

export const distributorStatus = pgEnum("distributor_status", ["approved", "suspended", "not_in_operation"]);

export const usersTable = pgTable("users", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: text("name").notNull(),
    email: text("email").unique(),
    phone: text("phone").unique(),
    password: varchar("password", { length: 64 }),
    location: text()
});

export const distributorsTable = pgTable("distributors", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    userId: integer("user_id").references(() => usersTable.id),
    storeName: text("store_name"),
    status: distributorStatus("status"),
    dues: text()
})


// do this is the database to enable nearest queries
// CREATE INDEX stores_location_gist
// ON stores
// USING GIST (location);
