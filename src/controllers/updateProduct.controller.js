import updateProductService from "../services/updateProduct.service";

const updateProductController = async (request, response) => {
  const { name, price, category_id } = request.body;
  const { id } = request.params;
  try {
    const udatedProduct = await updateProductService({
      product_id: id,
      name,
      price,
      category_id,
    });
    return response
      .status(200)
      .json({ message: "Product updated", ...udatedProduct });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default updateProductController;
