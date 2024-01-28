import { Schema, model, plugin } from 'mongoose';
import slug from 'mongoose-slug-updater';

const Product = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    material: {
      type: String,
    },
    source: {
      type: String,
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
    types: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true,
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    discount: {
      type: Number,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
        required: true,
      },
    ],
  },
  { timestamps: true },
);

//Add plugin
plugin(slug);

export default model('Product', Product);
