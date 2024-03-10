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
    address: String,
    status: {
      type: String,
      enum: ['pending', 'verified', 'banned'],
      default: 'pending',
    },
    avatar: {
      type: String,
    },
    phone: {
      type: String,
    },
    deliveryAddress: [
      {
        name: {
          type: String,
          required: true,
        },
        code: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        tag: {
          type: String,
          required: true,
        },
      },
    ],
    cart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    refreshToken: String,
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
