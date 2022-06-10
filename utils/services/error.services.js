import AppError from './../app-error.utils.js';

// DB: INVALID KEYS ERRORS
const handleCastErrorDB = (err) => {
  message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

// DB: DUPLICATE KEYS ERRORS
const handleDuplicateErrorDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}`;

  return new AppError(message, 400);
};

// DB: VALIDATION ERRORS
const handleValidationErrorDB = (err) => {
  let errors = '';
  for (let prop in err.errors) errors += err.errors[prop] + '. \n';

  const message = `Invalid input data: ${errors}`;
  return new AppError(message, 400);
};

const sendDevError = (err, res) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
};

const sendProdError = (err, res) => {
  const statusCode = err.statusCode || 500;

  if (err.isOperational) {
    res.status(statusCode).json({
      success: false,
      message: err.message,
    });
  }

  if (!err.isOperational) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
    });
  }
};

// MAIN
export default (err, req, res, next) => {
  if (process.env.NODE_ENV === 'dev') {
    sendDevError(err, res);
  }

  if (process.env.NODE_ENV === 'prod') {
    let error = { ...err };

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
    if (error.code === 'E11000') error = handleDuplicateErrorDB(error);

    sendProdError(error, res);
  }
};
