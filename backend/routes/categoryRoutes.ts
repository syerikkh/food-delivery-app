import { Router } from "express";
import { createCategory, getCategories } from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.post('/category', createCategory).get('/category', getCategories);

export { categoryRouter }