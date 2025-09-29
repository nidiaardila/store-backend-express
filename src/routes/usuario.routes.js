import { Router } from 'express'
import { createUser } from '../controllers/usuario.controller.js';
import { validationMiddleware } from '../middleware/validate.middleware.js';
import { Usuario } from '../models/usuario.model.js';


const router = Router();

router.post('/usuario', validationMiddleware(Usuario.validate), createUser);

export default router