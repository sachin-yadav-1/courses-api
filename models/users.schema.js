import mongoose from 'mongoose';
import UserRoles from './../common/user-roles.enum.js';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'User name is required'] },
    email: { type: String, required: [true, 'User email is required'] },
    contact: { type: String, minlength: 10, maxlength: 10, required: [true, 'User mobile is required'] },

    roles: [{ type: String, enum: UserRoles, default: 'STUDENT' }],
    password: { type: String, required: [true, 'Password is required'] },
  },
  { timestamps: true }
);

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
