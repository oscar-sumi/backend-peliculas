import { Pelicula } from "../models/Pelicula.js";

export async function getPeliculas(req, res) {
    try {
        const peliculas = await Pelicula.findAll({
            attributes: ['id', 'Title', 'Year', 'imdbID', 'Type', 'Poster'],
        });

        res.json(peliculas);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function createPelicula(req, res) {
    const { Title, Year, imdbID, Type, Poster } = req.body;
    try {
        const newPelicula = await Pelicula.create(
            {
                Title,
                Year,
                imdbID,
                Type,
                Poster
            },
            {
                fields: ['Title', 'Year', 'imdbID', 'Type', 'Poster'],
            }
        );
        return res.json(newPelicula);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function deletePelicula(req, res) {
    const { id } = req.params;
    try {
        await Pelicula.destroy({
            where: { id },
        });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}