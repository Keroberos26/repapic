import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

const type = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const Product = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    source: {
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
    types: [type],
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    discount: {
      type: Number,
      required: true,
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
mongoose.plugin(slug);

export default mongoose.model('Product', Product);
