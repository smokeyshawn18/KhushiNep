import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

let db;

export function getDb() {
  if (db) return db;

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  db = drizzle(neon(connectionString));
  return db;
}
