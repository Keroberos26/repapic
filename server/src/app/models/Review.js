import mongoose, { Schema, model } from 'mongoose';

const Review = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true },
);

export default model('Review', Review);
