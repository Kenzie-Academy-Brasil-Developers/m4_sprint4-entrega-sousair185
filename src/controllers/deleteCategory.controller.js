import deleteCategoryService from "../services/deleteCategory.service";

const deleteCategoryController = async (request, response) => {
  const { id } = request.params;
  try {
    if (!id){
    return response.status(200).json(`Missing ID`);
    }
    const res = await deleteCategoryService(id);
    return response.status(200).json(`Category ${id} deleted`);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default deleteCategoryController;