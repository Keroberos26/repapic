import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
import { createError } from '../../utils/error.js';

export const createUser = asyncHandler(async (req, res) => {
  const newUser = new User(req.body);
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    throw error;
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
    if (!user) {
      throw createError(404, 'Không tìm thấy User!');
    }
    res.status(200).json(user);
  } catch (error) {
    throw error;
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    if (!user) {
      throw createError(404, 'Không tìm thấy User!');
    }
    res.status(200).json(user);
  } catch (error) {
    throw error;
  }
});

export const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      throw createError(404, 'Không tìm thấy User!');
    }
    res.status(200).json(user);
  } catch (error) {
    throw error;
  }
});

export const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    throw error;
  }
});
