import mongoose from 'mongoose';

const Review = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    proId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    userId: {
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
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Review', Review);
