import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Category name is required!'], minlength: 3 },
    _parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category', default: null },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model('Category', CategorySchema);
export default CategoryModel;
