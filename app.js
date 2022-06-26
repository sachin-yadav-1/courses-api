import express, { json } from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';

import userRoutes from './routes/users.routes.js';
import courseRoutes from './routes/courses.routes.js';
import categoryRoutes from './routes/categories.routes.js';
import AppError from './utils/app-error.utils.js';
import GlobalErrorHanlder from './utils/services/error.services.js';

// APP & CONFIG
const app = express();
app.use(json());
dotenv.config({});

// MIDDLEWARES
app.use(morgan('dev'));

// ROUTES
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/categories', categoryRoutes);

app.use('*', (req, res, next) => {
  const message = `Path not found: ${req.originalUrl}`;
  next(new AppError(message, 404));
});

// GLOBAL ERROR HANDLER
app.use(GlobalErrorHanlder);

export default app;
