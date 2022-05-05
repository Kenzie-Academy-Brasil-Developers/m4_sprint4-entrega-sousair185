import getProductByIdService from "../services/getProductsById.service";

const getProductByIdController = async (request, response) => {
  const { id } = request.params;
  try {
    const res = await getProductByIdService(id);
    return response.status(200).json(res);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default getProductByIdController;
