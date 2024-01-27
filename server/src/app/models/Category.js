import mongoose, { Schema, model } from 'mongoose';
import slug from 'mongoose-slug-updater';

const Category = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: 'title',
      unique: true,
    },
  },
  { timestamps: true },
);

//Add plugin
plugin(slug);

export default model('Category', Category);
