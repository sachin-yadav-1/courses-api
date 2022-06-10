import { Router } from 'express';
import * as categoryController from './../controllers/category.controllers.js';

const router = Router();

router.route('/').post(categoryController.createCategory).get(categoryController.getAllCategories);

export default router;
