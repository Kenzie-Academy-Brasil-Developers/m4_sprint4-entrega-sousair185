import listIdProductsService from "../services/listIdProducts.service";

const listIdProductsController = async (request, response) => {
  const { id } = request.params;

  try {
    const products = await listIdProductsService(id);

    return response.json(products);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listIdProductsController;
