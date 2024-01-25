import mongoose from 'mongoose';

const Item = new mongoose.Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Order = new mongoose.Schema(
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
    items: [Item],
  },
  { timestamps: true },
);

export default mongoose.model('Order', Order);
