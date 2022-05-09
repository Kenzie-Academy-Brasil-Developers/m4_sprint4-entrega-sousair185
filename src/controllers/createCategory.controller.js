import createCategoryService from "../services/creatCategory.service";

const createCategoryController = async (request, response) => {
  const { name } = request.body;

  try {
    const category = await createCategoryService({ name });
    return response.status(201).json(category);
  } catch (err) {
    return response.status(400).json({ message: "Category don't created" });
  }
};

export default createCategoryController;
