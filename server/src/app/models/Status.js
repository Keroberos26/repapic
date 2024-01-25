import mongoose from 'mongoose';

const Status = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Status', Status);
