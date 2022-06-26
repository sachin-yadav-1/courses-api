import catchAsync from './../utils/catch-async.utils.js';

export const createCategory = catchAsync(async (req, res) => {
  const data = req.body;
  const category = await CategoryModel.create(data);

  res.status(201).json({
    success: true,
    items: category,
  });
});

export const getAllCategories = catchAsync(async (req, res) => {
  const data = req.query;

  const filter = {};
  for (const prop in data) filter[prop] = data[prop];

  const categories = await CategoryModel.find({});

  res.status(201).json({
    success: true,
    items: categories,
  });
});
