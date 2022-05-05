import getAllProductsWithSameCategory from "../services/getAllProducts.service";

const getAllProductsWithSameCAtegoryController = async (request, response) => {
  const { category_id } = request.params;
  try {
    const res = await getAllProductsWithSameCategory(category_id);
    return response.status(200).json(res);
  } catch (err) {
    return response.json(err.message);
  }
};

export default getAllProductsWithSameCAtegoryController;
