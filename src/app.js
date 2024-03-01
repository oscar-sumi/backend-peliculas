import express from 'express';
import morgan from 'morgan';

const app = express();

// Import routes
import usuarioRoutes from './routes/usuarios.routes.js';
import peliculaRoutes from './routes/peliculas.routes.js';
import loginRoutes from './routes/login.routes.js';

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/peliculas', peliculaRoutes);
app.use('/api/login', loginRoutes);

export default app;
