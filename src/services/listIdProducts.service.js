import database from "../database";

const listIdProductsService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listIdProductsService;
