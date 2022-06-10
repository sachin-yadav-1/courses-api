import chalk from 'chalk';
import mongoose from 'mongoose';

import app from './app.js';
import mongoConfig from './config/mongo.config.js';

// DB CONNECTION
const DB_URI = mongoConfig.uri;
mongoose
  .connect(DB_URI)
  .then(() => console.log(chalk.yellowBright('DB connection successfull: ', DB_URI)))
  .catch((err) => console.log(chalk.bgRed('DB connection error', err)));

// SERVER
const PORT = process.env.PORT;
const server = app.listen(PORT, () => console.log(chalk.yellowBright(`Server running on port: ${PORT}`)));
