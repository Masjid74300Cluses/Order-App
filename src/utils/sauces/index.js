import { db } from "@vercel/postgres";

export const getSauces = async () => {
  const client = await db.connect();

  const { rows: sauces } = await client.sql`SELECT * FROM sauces`;

  client.release();

  return sauces;
};
