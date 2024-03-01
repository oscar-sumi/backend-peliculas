import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(
    process.env.DB_BASEDEDATOS, // Obtenemos el nombre de la Base de Datos desde una variable de entorno
    process.env.DB_USUARIO, // Obtenemos el nombre de usuario de Base de Datos desde una variable de entorno
    process.env.DB_PASSWORD, // Obtenemos la contraseña de la Base de Datos desde una variable de entorno
    {
        host: process.env.DB_HOST, // Obtenemos el nombre del Host desde una variable de entorno
        dialect: process.env.DB_DIALECT, // Obtenemos el Gestor de Base de Datos desde una variable de entorno
    }
);
