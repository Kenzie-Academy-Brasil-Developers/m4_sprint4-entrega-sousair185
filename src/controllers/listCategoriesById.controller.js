import listCategoriesService from "../services/listCategories.services";

const listCategoriesByIdController = async (request, response) => {
  const { id: category_id } = request.params;

  try {
    const res = await listCategoriesService({ category_id });
    return response.status(200).json(res);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listCategoriesByIdController;
