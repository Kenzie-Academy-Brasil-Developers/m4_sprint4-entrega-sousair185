import listIdProductsService from "../services/listIdProducts.service";

const listIdProductsController = async (request, response) => {
  const { id } = request.params;

  try {
    const products = await listIdProductsService({ product_id: id });

    return response.status(200).json({ ...products });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listIdProductsController;
