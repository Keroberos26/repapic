import mongoose, { Schema, model } from 'mongoose';

const Status = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default model('Status', Status);
