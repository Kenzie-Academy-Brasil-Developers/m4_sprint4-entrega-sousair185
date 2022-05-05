import listCategoriesService from "../services/listCategories.services";

const listCategoriesController = async (request, response) => {
  try {
    const res = await listCategoriesService();
    return response.status(200).json(res);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listCategoriesController;
