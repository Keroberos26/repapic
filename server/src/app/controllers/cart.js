import Cart from '../models/Cart.js';
import asyncHandler from 'express-async-handler';
import { createError } from '../../utils/error.js';

export const createCart = asyncHandler(async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const cart = await newCart.save();
    res.status(201).json(cart);
  } catch (error) {
    throw error;
  }
});

export const updateCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
    if (!cart) {
      throw createError(404, 'Không tìm thấy Cart!');
    }
    res.status(200).json(cart);
  } catch (error) {
    throw error;
  }
});

export const deleteCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({ _id: req.params.id });
    if (!cart) {
      throw createError(404, 'Không tìm thấy Cart!');
    }
    res.status(200).json(cart);
  } catch (error) {
    throw error;
  }
});

export const getCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOne({ _id: req.params.id });
    if (!cart) {
      throw createError(404, 'Không tìm thấy Cart!');
    }
    res.status(200).json(cart);
  } catch (error) {
    throw error;
  }
});

export const getCarts = asyncHandler(async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    throw error;
  }
});
