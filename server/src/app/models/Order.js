import mongoose, { Schema, model, plugin } from 'mongoose';
import slug from 'mongoose-slug-updater';

const Order = new Schema(
  {
    id: {
      type: ObjectId,
      required: true,
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: 'Status',
      required: true,
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
            slug: 'title',
            unique: true,
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
          type: {
            size: {
              type: String,
              required: true,
            },
            price: {
              type: Number,
              required: true,
            },
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

//Add plugin
plugin(slug);

export default model('Order', Order);
