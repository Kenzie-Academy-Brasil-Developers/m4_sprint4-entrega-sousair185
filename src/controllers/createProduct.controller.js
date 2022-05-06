import createProductService from "../services/createProduct.service";

const createProductController = async (request, response) => {
  const { name, price, category_id } = request.body;
  try {
    const res = await createProductService({ name, price, category_id });
    return response.status(201).json({
      message: "Product created",
    });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default createProductController;
