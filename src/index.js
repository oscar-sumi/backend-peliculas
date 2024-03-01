import app from './app.js';
import { sequelize } from './database/database.js';
import 'dotenv/config';
import logger from './logs/logger.js';

async function main() {
    console.clear();
    await sequelize.sync({ force: false });
    const PORT = process.env.PORT;
    app.listen(PORT);
    logger.info(`Servidor en puerto ${PORT}`);
    logger.error(`Servidor en puerto ${PORT}`);
    logger.debug(`Servidor en puerto ${PORT}`);
    logger.warn(`Servidor en puerto ${PORT}`);
    logger.fatal(`Servidor en puerto ${PORT}`);
}

main();