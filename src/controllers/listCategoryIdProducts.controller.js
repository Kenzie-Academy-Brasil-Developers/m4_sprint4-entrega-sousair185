import listCategoryIdProductService from "../services/listCategoryIdProducts.service";

const listCategoryIdProductsController = async (request, response) => {
  const { id } = request.params;

  try {
    const products = await listCategoryIdProductService({ category_id: id });

    return response.status(200).json(products);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listCategoryIdProductsController;
