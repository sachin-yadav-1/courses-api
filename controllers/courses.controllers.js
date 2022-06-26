import catchAsync from './../utils/catch-async.utils.js';

export const createCourse = catchAsync(async (req, res) => {
  const data = req.body;
  const course = await CourseModel.create(data);

  res.status(201).json({
    success: true,
    items: course,
  });
});

export const getAllCourses = catchAsync(async (req, res) => {
  const data = req.query;
  const filter = {};
  for (const prop in data) filter[prop] = data[prop];

  const courses = await CourseModel.find({});

  res.status(201).json({
    success: true,
    items: courses,
  });
});
