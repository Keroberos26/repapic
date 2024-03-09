import Review from '../models/Review.js';
import asyncHandler from 'express-async-handler';
import { createError } from '../../utils/error.js';

export const createReview = asyncHandler(async (req, res) => {
  const newReview = new Review(req.body);
  try {
    const review = await newReview.save();
    res.status(201).json(review);
  } catch (error) {
    throw error;
  }
});

export const updateReview = asyncHandler(async (req, res) => {
  try {
    const review = await Review.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
    if (!review) {
      throw createError(404, 'Không tìm thấy Reviews!');
    }
    res.status(200).json(review);
  } catch (error) {
    throw error;
  }
});

export const deleteReview = asyncHandler(async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({ _id: req.params.id });
    if (!review) {
      throw createError(404, 'Không tìm thấy Reviews!');
    }
    res.status(200).json(review);
  } catch (error) {
    throw error;
  }
});

export const getReview = asyncHandler(async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id });
    if (!review) {
      throw createError(404, 'Không tìm thấy Reviews!');
    }
    res.status(200).json(review);
  } catch (error) {
    throw error;
  }
});

export const getReviews = asyncHandler(async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    throw error;
  }
});
