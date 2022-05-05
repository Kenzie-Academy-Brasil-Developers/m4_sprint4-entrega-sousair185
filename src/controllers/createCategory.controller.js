import createCategoryService from "../services/creatCategory.services";

const createCategoryController = async (request, response) => {
  const { name } = request.body;

  try {
    const category = await createCategoryService(name);
    
    return response.status(201).json({category}) + console.log(response);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default createCategoryController;