import { Pool } from "@neondatabase/serverless";

// Create a connection pool with Neon PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Export a helper function that executes queries
export async function query(sql, params = []) {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query(sql, params);
      return result.rows;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Neon database query error:", error);
    throw error;
  }
}
