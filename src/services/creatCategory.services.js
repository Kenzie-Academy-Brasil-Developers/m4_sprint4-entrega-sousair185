import database from "../database";

const createCategoryService = async (name) => {
  try {
    const { rows } = await database.query(
      "INSERT INTO  categories (name) VALUES ($1) RETURNING *",
      [name]
    );
    const res = {
      message: `Category ${rows[0].name} created`,
      category: rows[0],
    };
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export default createCategoryService;
