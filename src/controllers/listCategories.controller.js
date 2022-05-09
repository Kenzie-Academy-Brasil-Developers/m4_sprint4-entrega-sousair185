import listCategoriesService from "../services/listCategories.service";

const listCategoriesController = async (request, response) => {
  try {
    const res = await listCategoriesService();
    return response.status(200).json(res);
  } catch (err) {
    return response
      .status(400)
      .json({ message: "Don't possible list categories" });
  }
};

export default listCategoriesController;
