import deleteCategoryService from "../services/deleteCategory.service";

const deleteCategoryController = async (request, response) => {
  const { id: category_id } = request.params;
  try {
    await deleteCategoryService({ category_id });
    return response.status(200).json({ message: "Category deleted" });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default deleteCategoryController;
