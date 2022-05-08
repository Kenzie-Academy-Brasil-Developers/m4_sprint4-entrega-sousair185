import { Router } from "express";
import createCategoryController from "../controllers/createCategory.controller";
import deleteCategoryController from "../controllers/deleteCategory.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listCategoriesByIdController from "../controllers/listCategoriesById.controller";
import updateCategoryController from "../controllers/updateCategory.controller";

const router = Router();

router.get("", listCategoriesController);
router.post("", createCategoryController);
router.get("/:id", listCategoriesByIdController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;
