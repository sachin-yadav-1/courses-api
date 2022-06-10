import * as categoryService from './../services/categories.services.js';
import catchAsync from './../utils/catch-async.utils.js';

export const createCategory = catchAsync(async (req, res) => {
  const data = req.body;
  const category = await categoryService.createCategory(data);

  res.status(201).json({
    success: true,
    items: category,
  });
});

export const getAllCategories = catchAsync(async (req, res) => {
  const data = req.query;
  const categories = await categoryService.getAllCategories(data);

  res.status(201).json({
    success: true,
    items: categories,
  });
});
