import mongoose from 'mongoose';
import CourseLevels from './../common/course-levels.enum.js';
import CourseImageTypes from './../common/course-images.enum.js';

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Course title is required!'] },
    headline: { type: String, required: [true, 'Course headline is required!'] },
    slug: { type: String, required: [true, 'Course slug is required!'] },
    instructional_level: { type: String, enum: CourseLevels, default: 'ALL' },
    description: { type: String, default: null },
    objectives: [{ type: String }],
    pre_requisites: [{ type: String }],
    tags: [{ type: String }],
    num_subscribers: { type: Number, default: 0 },
    is_published: { type: Boolean, default: false },
    is_approved: { type: Boolean, default: false },
    has_certificate: { type: Boolean, default: false },
    has_closed_caption: { type: Boolean, default: false },
    enrollment_open: { type: Boolean, default: false },
    display_images: [
      {
        screen_type: { type: String, default: 'WEB', enum: CourseImageTypes },
        image: { type: String, default: null },
      },
    ],

    _categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    _instructors: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

const CourseModel = mongoose.model('Course', CourseSchema);
export default CourseModel;
