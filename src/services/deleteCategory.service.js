import database from "../database";

const deleteCategoryService = async ({ category_id }) => {
  try {
        const res = await database.query(
            "SELECT * FROM categories WHERE id = $1",
            [category_id]
        )

        

        if (!res.rows.length) {
            throw new Error("Category id not found");
          }

        await database.query(
            "DELETE FROM categories WHERE id = $1",
            [category_id]
        )


        
    } catch (err) {
        throw new Error(err.message)
        
    }
}

export default deleteCategoryService;
