import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const User = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
    city: {
      type: String,
    },
    district: {
      type: String,
    },
    ward: {
      type: String,
    },
    phone: {
      type: String,
    },
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

User.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

User.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default model('User', User);
