import database from "../database";

const listCategoryIdProductService = async (id) => {
  try {
    const res = await database.query(
      "SELECT name.products FROM products INNER JOIN categories ON id = $1",
      [id]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoryIdProductService;
