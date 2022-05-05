import updateCategoryService from "../services/updateCategory.service";

const updateCategoryController = async (request, response) => {
  const { newName } = request.body;
  const { id } = request.params;

  try {
    if (newName) {
      const res = await updateCategoryService(id, newName);
      return response.status(200).json(res);
    } else {
      return response.status(200).json({
        message: "You can change only the name using the newName key",
      });
    }
  } catch (err) {
    return response.json(err);
  }
};

export default updateCategoryController;
