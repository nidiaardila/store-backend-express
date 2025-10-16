import { Router } from 'express'
import { createUser, findAllActiveUsers, findUserActiveById, findUserByFilters } from '../controllers/usuario.controller.js';
import { validationMiddleware } from '../middleware/validate.middleware.js';
import { Usuario } from '../models/usuario.model.js';


const router = Router();

router.post('/usuario', validationMiddleware(Usuario.validate), createUser);
router.get('/usuario', findAllActiveUsers);
router.get('/usuario/:id', findUserActiveById);
router.get('/usuario/id/:id', findUserActiveById);
router.get('/usuario/filters', findUserByFilters);

export default router