import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

const Category = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
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
mongoose.plugin(slug);

export default mongoose.model('Category', Category);
