import { Router } from 'express';
import { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario, getUsuarioPeliculas } from '../controllers/usuario.controller.js';
import { verifyToken } from '../middleware/login.js';

const router = Router();

// Routes
router.get('/', verifyToken, getUsuarios);

router.post('/', createUsuario);

router.get('/:id', verifyToken, getUsuario);

router.put('/:id', verifyToken, updateUsuario);

router.delete('/:id', verifyToken, deleteUsuario);

router.get('/:id/peliculas', verifyToken, getUsuarioPeliculas);

export default router;