import CategoryModel from './../models/categories.schema.js';
import catchAsync from './../utils/catch-async.utils.js';

export const createCategory = catchAsync(async (data, next) => {
  const category = await CategoryModel.create(data);
  return category;
});

export const getAllCategories = catchAsync(async (data, next) => {
  const filter = {};
  for (const prop in data) filter[prop] = data[prop];

  const categories = await CategoryModel.find({});
  return categories;
});
