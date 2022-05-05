import { Router } from "express";
import createCategoryController from "../controllers/createCategory.controller";
import deleteCategoryController from "../controllers/deleteCategory.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listCategoriesByIdController from "../controllers/listCategoriesById.controller";
import updateCategoryController from "../controllers/updateCategory.controller";

const router = Router();

router.get("/categories", listCategoriesController);
router.post("/categories", createCategoryController);
router.get("/categories/:id", listCategoriesByIdController);
router.patch("/categories/:id", updateCategoryController);
router.delete("/categories/:id", deleteCategoryController);

export default router;
