import deleteProductService from "../services/deleteProduct.service";

const deleteProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedProduct = await deleteProductService(id);
    return response.status(200).json({
      message: "Product deleted with success",
      product: deletedProduct,
    });
  } catch (err) {
    response.json(err.message);
  }
};

export default deleteProductController;
