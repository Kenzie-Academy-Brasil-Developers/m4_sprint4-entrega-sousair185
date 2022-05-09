import database from "../database";

const listProductsService = async (product_id) => {
  try {
    const where = !!product_id ? `id = '${product_id}'` : "1=1";
    const res = await database.query(`SELECT * FROM products WHERE ${where};`);

    return !!product_id ? res.rows[0] : res.rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default listProductsService;
