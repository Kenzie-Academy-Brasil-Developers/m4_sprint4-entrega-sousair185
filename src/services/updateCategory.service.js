import database from "../database";

const updateCategoryService = async (id, newName) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [newName, id]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;
