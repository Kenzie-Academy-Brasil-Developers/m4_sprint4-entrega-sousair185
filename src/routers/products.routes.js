import { Router } from "express";
import createProductController from "../controllers/createProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";
import getAllProductsWithSameCAtegoryController from "../controllers/getAllProductsWithSameCategory.controller";
import listCategoryIdProductsController from "../controllers/listCategoryIdProducts.controller copy";
import listIdProductsController from "../controllers/listIdProducts.controller";
import listProductsController from "../controllers/listProducts.controller";
import updateProductController from "../controllers/updateProduct.controller";

const router = Router();

router.post("/products", createProductController);
router.get("/products", listProductsController);
router.get("/products/:id", listIdProductsController);
router.get(
  "/products/category/:category_id",
  getAllProductsWithSameCAtegoryController
);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);

export default router;
