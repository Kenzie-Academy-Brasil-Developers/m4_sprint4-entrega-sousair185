import deleteProductService from "../services/deleteProduct.service";

const deleteProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedProduct = await deleteProductService({ product_id: id });
    return response.status(200).json({
      message: "Product deleted",
    });
  } catch (err) {
    response.status(400).json({ message: "Product don't be deleted" });
  }
};

export default deleteProductController;
