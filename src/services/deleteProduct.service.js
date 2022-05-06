import database from "../database";

const deleteProductService = async ({ product_id }) => {
  try {
    const res = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [product_id]
    );

    if (res.rows.length === 0) {
      throw "product id not found";
    }

    return "Product deleted";
  } catch (err) {
    throw new Error(err.message);
  }
};

export default deleteProductService;
