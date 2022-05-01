import deleteProductService from "../services/deleteProduct.service";

const deleteProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const deleProduct = await deleteProductService(id);

    return response.json(deleProduct);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default deleteProductController;
