import listCategoryProductService from "../services/listCategoryProduct.service";

const listCategoryProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const products = await listCategoryProductService({ product_id: id });

    return response.status(200).json(products);
  } catch (err) {
    return response
      .status(400)
      .json({ message: "Don't be possible list product" });
  }
};

export default listCategoryProductController;
