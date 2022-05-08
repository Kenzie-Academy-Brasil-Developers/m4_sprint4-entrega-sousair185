import createProductService from "../services/createProduct.service";

const createProductController = async (request, response) => {
  const { name, price, category_id } = request.body;
  try {
    const res = await createProductService({ name, price, category_id });
    return response.status(201).json({
      message: "Product created",
      product: { name: res.name, id: res.id, category_id },
    });
  } catch (err) {
    return response.status(400).json({ message: "Product don't be created" });
  }
};

export default createProductController;
