import { Router } from 'express';
import {
	createUser,
	deleteUser,
	getAllUsers,
	getUser,
	findUserByUsername,
} from '../../controllers/user.controller.js';

const routes = Router();

routes.get('/', getAllUsers);
routes.post('/', createUser);
routes.post('/login', findUserByUsername);
routes.get('/:id', getUser);
routes.delete('/:id', deleteUser);

export default routes;
