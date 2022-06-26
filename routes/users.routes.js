import { Router } from 'express';
import * as userController from './../controllers/users.controllers.js';

const router = Router();

router.route('/').post(userController.createUser).get(userController.getAllUsers);
router.route('/:id').get(userController.getUserById);

export default router;
