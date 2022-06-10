import { Router } from 'express';
import * as coursesController from './../controllers/courses.controllers.js';

const router = Router();

router.route('/').post(coursesController.createCourse).get(coursesController.getAllCourses);

export default router;
