import listCategoryIdProductService from "../services/listCategoryIdProducts.service copy";

const listCategoryIdProductsController = async (request, response) => {
  const { id } = request.params;

  try {
    const products = await listCategoryIdProductService(id);

    return response.json(products);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listCategoryIdProductsController;
