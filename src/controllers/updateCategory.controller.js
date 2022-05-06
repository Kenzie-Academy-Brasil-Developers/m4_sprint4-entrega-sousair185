import updateCategoryService from "../services/updateCategory.service";

const updateCategoryController = async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;

  try {
    const res = await updateCategoryService({ category_id: id, name });
    return response.status(200).json({
      message: "Category updated",
      res: { name: `${res.name} Updated`, ...res },
    });
  } catch (err) {
    return response.status(400).json({ message: "Category don't updated" });
  }
};

export default updateCategoryController;
