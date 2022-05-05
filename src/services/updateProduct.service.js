import { response } from "express";
import database from "../database";

const updateProductService = async (id, name, price, category_id) => {
  try {
    const product = await database.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );
    const res = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *",
      [
        name || product.rows[0].name,
        price || product.rows[0].price,
        category_id || product.rows[0].category_id,
        id,
      ]
    );
    if (res.rows.length === 0) {
      throw "Nothing found";
    }
    return res.rows[0];
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default updateProductService;
