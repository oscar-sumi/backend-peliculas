import { Usuario } from "../models/Usuario.js";
import Jwt from 'jsonwebtoken';
import 'dotenv/config';
import logger from '../logs/logger.js';

export async function getToken(req, res) {
    // verificamos si tenemos un usuario con ese correo y contraseña
    const { correo, contrasena } = req.body;
    const LLAVE_ENCRIPTACION = process.env.LLAVE_ENCRIPTACION;
    try {
        const usuario = await Usuario.findOne({
            where: { correo, contrasena },
        });

        if (usuario) {
            Jwt.sign({usuario}, LLAVE_ENCRIPTACION, (err, token) => {
                res.json({token});
            });
        }
        else {
            logger.error(`Usuario y contraseña no válidos`);
            res.json({
                message: "Usuario y contraseña no válidos",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }    
}