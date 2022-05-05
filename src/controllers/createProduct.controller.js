import createProductService from "../services/createProduct.service";

const createProductController = async (request, response) => {
  const { name, price, category_id } = request.body;
  try {
    if (name && price && category_id) {
      const res = await createProductService(name, price, category_id);
      return response.status(201).json(res);
    } else {
      return response.json("Campos inválidos");
    }
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default createProductController;
