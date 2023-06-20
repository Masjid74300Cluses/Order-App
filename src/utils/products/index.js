import { db } from "@vercel/postgres";

export const getProducts = async () => {
  const client = await db.connect();

  const { rows: productsRows } = await client.sql`SELECT * FROM products WHERE available = TRUE ORDER BY type DESC`;
  client.release();

  const products = productsRows.map((row) => {
    row.price = parseFloat(row.price);
    return { ...row };
  });

  return products;
};

export const getProductById = async (id) => {
  const client = await db.connect();

  const { rows: productsRows } =
    await client.sql`SELECT * FROM products WHERE id = ${id}`;
  client.release();

  if (!productsRows.length) {
    return null;
  }

  productsRows[0].price = parseFloat(productsRows[0].price);

  return productsRows[0];
};
