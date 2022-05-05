import updateProductService from "../services/updateProduct.service";

const updateProductController = async (request, response) => {
  const { name, price, category_id } = request.body;
  const { id } = request.params;
  try {
    const udatedProduct = await updateProductService(
      id,
      name,
      price,
      category_id
    );
    return response.status(200).json("Product has been updated");
  } catch (err) {
    return response.status(200).json("Product not updated");
  }
};

export default updateProductController;
