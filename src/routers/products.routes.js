import { Router } from "express";
import createProductController from "../controllers/createProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";
import listCategoryIdProductsController from "../controllers/listCategoryIdProducts.controller copy";
import listIdProductsController from "../controllers/listIdProducts.controller";
import listProductsController from "../controllers/listProducts.controller";
import updateProductController from "../controllers/updateProduct.controller";

const router = Router();

router.post("", createProductController);
router.get("", listProductsController);
router.get("/:id", listIdProductsController);
router.get("/category/:id", listCategoryIdProductsController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;
