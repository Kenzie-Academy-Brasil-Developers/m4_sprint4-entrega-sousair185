import listProductsService from "../services/listProducts.service";

const listProductsController = async (request, response) => {
  try {
    const products = await listProductsService();

    return response.satus(200).json(products);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listProductsController;
