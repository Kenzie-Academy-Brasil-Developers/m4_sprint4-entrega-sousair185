import database from "../database";

const createCategoryService = async ({ name }) => {
  try {
    const res = await database.query(
      "INSERT INTO  categories (name) VALUES ($1) RETURNING *",
      [name]
    );
    return {
      message: "Category sucessfully created",
      category: res.rows[0],
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

export default createCategoryService;
