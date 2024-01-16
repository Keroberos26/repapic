import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

const Product = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
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

export default mongoose.model('Product', Product);
