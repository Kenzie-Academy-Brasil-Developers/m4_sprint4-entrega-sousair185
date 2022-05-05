import listCategoryByIdService from "../services/listCategoryById.service";

const listCategoriesByIdController = async (request, response) => {
  try {
    const res = await listCategoryByIdService(request.params.id);
    if (res.length > 0) {
      return response.status(200).json(res);
    }
    return response.status(200).json({ message: "No category with this ID" });
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listCategoriesByIdController;
