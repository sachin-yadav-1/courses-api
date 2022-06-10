import UserModel from './../models/users.schema.js';
import catchAsync from './../utils/catch-async.utils.js';

export const createNewUser = catchAsync(async (data) => {
  const user = await UserModel.create(data);
  return user;
});
