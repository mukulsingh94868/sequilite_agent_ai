import { db } from "./db";
import { productsTable, salesTable } from "./schema";

export async function seed() {
  console.log("🌱 Seeding database...");

  await db.transaction(async (tx) => {
    await tx.insert(productsTable).values([
      { name: "Laptop", category: "Electronics", price: 99999, stock: 50 },
      { name: "Mouse", category: "Electronics", price: 2599, stock: 200 },
      { name: "Keyboard", category: "Electronics", price: 7500, stock: 150 },
      { name: "Monitor", category: "Electronics", price: 29999, stock: 75 },
      { name: "Desk Chair", category: "Furniture", price: 19999, stock: 40 },
      { name: "Desk", category: "Furniture", price: 39999, stock: 30 },
      { name: "Notebook", category: "Stationery", price: 599, stock: 500 },
      { name: "Pen Set", category: "Stationery", price: 1299, stock: 300 },
    ]);

    await tx.insert(salesTable).values([
      {
        product_id: 1,
        quantity: 2,
        total_amount: 199998,
        customer_name: "John Doe",
        region: "North",
      },
      {
        product_id: 2,
        quantity: 5,
        total_amount: 12995,
        customer_name: "Jane Smith",
        region: "South",
      },
      {
        product_id: 3,
        quantity: 3,
        total_amount: 22500,
        customer_name: "Bob Johnson",
        region: "East",
      },
      {
        product_id: 1,
        quantity: 1,
        total_amount: 99999,
        customer_name: "Alice Brown",
        region: "West",
      },
      {
        product_id: 4,
        quantity: 2,
        total_amount: 59998,
        customer_name: "Charlie Wilson",
        region: "North",
      },
      {
        product_id: 5,
        quantity: 4,
        total_amount: 79996,
        customer_name: "Diana Davis",
        region: "South",
      },
      {
        product_id: 6,
        quantity: 1,
        total_amount: 39999,
        customer_name: "Eve Martinez",
        region: "East",
      },
      {
        product_id: 7,
        quantity: 20,
        total_amount: 11980,
        customer_name: "Frank Lee",
        region: "West",
      },
      {
        product_id: 8,
        quantity: 10,
        total_amount: 12990,
        customer_name: "Grace Kim",
        region: "North",
      },
      {
        product_id: 2,
        quantity: 3,
        total_amount: 7797,
        customer_name: "Henry Chen",
        region: "South",
      },
      {
        product_id: 3,
        quantity: 2,
        total_amount: 15000,
        customer_name: "Ivy Wang",
        region: "East",
      },
      {
        product_id: 1,
        quantity: 1,
        total_amount: 99999,
        customer_name: "Jack Taylor",
        region: "West",
      },
    ]);
  });

  console.log("✅ Database seeded successfully!");
}

seed();
