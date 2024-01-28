import { Schema } from 'mongoose';

const Type = new Schema({
  size: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default model('Type', Type);
