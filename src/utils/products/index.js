import { db } from "@vercel/postgres";

export const getProducts = async () => {
  const client = await db.connect();

  const { rows: productsRows } =
    await client.sql`SELECT * FROM products WHERE available = TRUE GROUP BY products.id, stand
  ORDER BY type ASC
  `;
  client.release();

  console.log("productsRows", productsRows[0]);

  const products = productsRows.map((row) => {
    row.price = parseFloat(row.price);
    return { ...row };
  });

  return products;
};
export const getStandsList = async () => {
  const client = await db.connect();

  const { rows: standsRows } = await client.sql`SELECT st.id, st.name,
       json_agg(
           json_build_object(
               'id', fi.id,
               'name', fi.name,
               'price', fi.price,
               'stand',(SELECT json_build_object(
                    'id', st.id,
                    'name', st.name
                
                )
                FROM stands AS st
                WHERE st.id = fi.stand_id
                ),
               'available', fi.available,
               'sauces', (
                   SELECT json_agg(
                       json_build_object(
                           'id', s.id, 
                           'name', s.name,
                           'available', s.available
                       )
                   )
                   FROM food_items_sauces AS fis
                   JOIN sauces AS s ON fis.sauce_id = s.id
                   WHERE fis.food_item_id = fi.id
               ),
               'veggies', (
                   SELECT json_agg(
                       json_build_object(
                           'id', v.id,
                           'name', v.name,
                           'available', v.available
                       )
                   )
                   FROM food_items_veggies AS fiv
                   JOIN veggies AS v ON fiv.veggie_id = v.id
                   WHERE fiv.food_item_id = fi.id
               )
           )
       ) AS "productsList"
FROM food_items AS fi
JOIN stands AS st ON fi.stand_id = st.id
GROUP BY st.id, st.name
ORDER BY st.id;

`;
  client.release();

  return standsRows;
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
