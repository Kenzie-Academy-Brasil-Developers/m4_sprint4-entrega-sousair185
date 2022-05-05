import database from "../database";

const getAllProductsWithSameCategory = async (category_id) => {
  try {
    const res = await database.query(
      "SELECT DISTINCT * FROM products INNER JOIN categories ON products.category_id = $1",
      [category_id]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default getAllProductsWithSameCategory;
