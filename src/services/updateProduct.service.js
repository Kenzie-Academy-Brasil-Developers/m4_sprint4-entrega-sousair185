import database from "../database";

const updateProductService = async (id, name, price) => {
  try {
    const res = await database.query(
      "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *",
      [name, price, id]
    );

    if (res.rows.length === 0) {
      throw "product id not found";
    }

    return { message: "Product updated", product: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;
