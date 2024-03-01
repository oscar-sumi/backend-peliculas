import Jwt from 'jsonwebtoken';
import 'dotenv/config';

export function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    // bearer sfdj72951vznETYWWQEEWksaiopweo4756

    // Obtenemos la cadena de encriptación del jwt desde una variable de entorno
    const LLAVE_ENCRIPTACION = process.env.LLAVE_ENCRIPTACION;

    if (typeof bearerHeader !== 'undefined') 
    {
        const token = bearerHeader.split(' ')[1];
        Jwt.verify(token, LLAVE_ENCRIPTACION, (error, usuario) => {
            if (error)
            {
                res.sendStatus(403);
            }
            else
            {
                next();
            }
        });
    } 
    else 
    {
        res.sendStatus(403);
    }
}