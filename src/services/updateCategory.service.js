import database from "../database";

const updateCategoryService = async (category_id, newName) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [newName, category_id]
    );
    if (!res.rows.length) {
      throw new Error("Category id not found");
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default updateCategoryService;
