import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Pelicula = sequelize.define('peliculas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imdbID: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Poster: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});