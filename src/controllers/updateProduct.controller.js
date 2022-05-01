import updateProductService from "../services/updateProduct.service";

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  try {
    const updateProduct = await updateProductService(id, name, price);

    return response.json(updateProduct);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default updateProductController;
