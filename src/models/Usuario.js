import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Pelicula } from './Pelicula.js';

export const Usuario = sequelize.define(
    'usuarios',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Nombre de usuario',
        },
        ap_paterno: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Primer Apellido usuario',
        },
        ap_materno: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Segundo Apellido usuario',
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Contraseña del usuario',
        }
    }
);

Usuario.hasMany(Pelicula, {
    foreignKey: 'usuario_id',
    sourceKey: 'id',
});

Pelicula.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    targetKey: 'id',
});
