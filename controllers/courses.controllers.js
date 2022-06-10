import * as courseService from './../services/courses.services.js';
import catchAsync from './../utils/catch-async.utils.js';

export const createCourse = catchAsync(async (req, res) => {
  const data = req.body;
  const course = await courseService.createCourse(data);

  res.status(201).json({
    success: true,
    items: course,
  });
});

export const getAllCourses = catchAsync(async (req, res) => {
  const data = req.query;
  const courses = await courseService.getAllCourses(data);

  res.status(201).json({
    success: true,
    items: courses,
  });
});
