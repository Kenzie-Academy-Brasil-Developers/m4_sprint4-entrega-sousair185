import database from "../database";

const listCategoriesService = async (category_id) => {
  try {
    const where = !!category_id ? `id = '${category_id}'` : "1=1";
    const query = `SELECT * FROM categories WHERE ${where};`;
    const res = await database.query(query);

    return !!category_id ? res.rows[0] : res.rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default listCategoriesService;
