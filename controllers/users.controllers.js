import catchAsync from './../utils/catch-async.utils.js';
import AppError from './../utils/app-error.utils.js';
import UserModel from './../models/users.schema.js';

export const createUser = catchAsync(async (req, res, next) => {
  const data = req.body;
  const user = await UserModel.create(data);

  res.status(201).json({
    success: true,
    items: user,
  });
});

export const getAllUsers = catchAsync(async (req, res) => {
  const data = req.query;

  const filter = {};
  for (const prop in data) filter[prop] = data[prop];

  const users = await UserModel.find({});

  res.status(201).json({
    success: true,
    items: users,
  });
});

export const getUserById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await UserModel.findById(id);
  if (!user) return next(new AppError('User not found!', 404));

  res.status(201).json({
    success: true,
    items: user,
  });
});
