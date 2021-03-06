import listCategoriesService from "../services/listCategories.service";

const listCategoriesByIdController = async (request, response) => {
  const { id: category_id } = request.params;
  console.log(category_id);
  try {
    const res = await listCategoriesService(category_id);
    return response.status(200).json(res);
  } catch (err) {
    return response
      .status(400)
      .json({ message: "Don't possible list category" });
  }
};

export default listCategoriesByIdController;
