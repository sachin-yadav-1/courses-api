import CourseModel from './../models/courses.schema.js';
import catchAsync from './../utils/catch-async.utils.js';

export const createCourse = catchAsync(async (data, next) => {
  const category = await CourseModel.create(data);
  return category;
});

export const getAllCourses = catchAsync(async (data, next) => {
  const filter = {};
  for (const prop in data) filter[prop] = data[prop];

  const categories = await CourseModel.find({});
  return categories;
});
