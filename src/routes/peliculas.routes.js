import { Router } from 'express';
import { getPeliculas, createPelicula, deletePelicula } from '../controllers/pelicula.controller.js';
import { verifyToken } from '../middleware/login.js';


const router = Router();

// Routes
router.get('/', verifyToken, getPeliculas);

router.post('/', verifyToken, createPelicula);

router.delete('/:id', verifyToken, deletePelicula);

export default router;