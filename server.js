import chalk from 'chalk';
import mongoose from 'mongoose';

// GLOBAL UNHANDLED EXCEPTION
process.on('uncaughtException', (err) => {
  console.log(chalk.bgRedBright('UNHANDLED EXCEPTION: '), err.name, err.message);
  console.log(chalk.yellowBright('SHUTTING DOWN SERVER...'));
  process.exit(1);
});

import app from './app.js';
import mongoConfig from './config/mongo.config.js';

// DB CONNECTION
const DB_URI = mongoConfig.uri;
mongoose
  .connect(DB_URI)
  .then(() => console.log(chalk.yellowBright('DB connection successfull: ', DB_URI)))
  .catch((err) => console.log(chalk.bgRed('DB connection error'), err.name, err.message));

// SERVER
const PORT = process.env.PORT;
const server = app.listen(PORT, () => console.log(chalk.yellowBright(`Server running on port: ${PORT}`)));

// GLOBAL UNHANDLED REJECTION
process.on('unhandledRejection', (err) => {
  console.log(chalk.bgRedBright('UNHANDLED REJECTION: '), err.name, err.message);
  console.log(chalk.yellowBright('SHUTTING DOWN SERVER...'));

  server.close(() => process.exit(1));
  console.log(chalk.yellowBright('SERVER CLOSED...'));
});
