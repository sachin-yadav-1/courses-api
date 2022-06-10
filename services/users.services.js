import UserModel from './../models/users.schema.js';
import catchAsync from './../utils/catch-async.utils.js';

export const createNewUser = catchAsync(async (data) => {
  const user = await UserModel.create(data);
  return user;
});

export const getAllUsers = catchAsync(async (data, next) => {
  const filter = {};
  for (const prop in data) filter[prop] = data[prop];

  const users = await UserModel.find({});
  return users;
});
