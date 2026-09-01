import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// Price and total amounts are stored in integer minor units (cents).
export const productsTable = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  category: text("category").notNull(),
  price: integer("price").notNull(),
  stock: integer("stock").notNull().default(0),
  created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

// Sales table
export const salesTable = sqliteTable("sales", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  product_id: integer("product_id")
    .notNull()
    .references(() => productsTable.id),
  quantity: integer("quantity").notNull(),
  total_amount: integer("total_amount").notNull(),
  sale_date: text("sale_date").default(sql`CURRENT_TIMESTAMP`),
  customer_name: text("customer_name").notNull(),
  region: text("region").notNull(),
});
