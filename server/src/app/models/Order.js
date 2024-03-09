import { Schema, model } from 'mongoose';

const Order = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'delivering', 'completed', 'canceled', 'closed'],
      default: 'pending',
    },
    items: [
      {
        product: {
          title: {
            type: String,
            required: true,
          },
          slug: {
            type: String,
            required: true,
          },
          images: {
            type: [String],
            required: true,
          },
          category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
          },
          discount: {
            type: Number,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);

export default model('Order', Order);
