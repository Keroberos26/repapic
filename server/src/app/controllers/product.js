import Product from '../models/Product.js';
import asyncHandler from 'express-async-handler';
import { createError } from '../../utils/error.js';

export const createProduct = asyncHandler(async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    throw error;
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate({ slug: req.params.slug }, { $set: req.body }, { new: true }).select(
      '-reviews',
    );
    if (!product) {
      throw createError(404, 'Không tìm thấy sản phẩm!');
    }
    res.status(200).json(product);
  } catch (error) {
    throw error;
  }
});

export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ slug: req.params.slug }).select('-reviews');
    if (!product) {
      throw createError(404, 'Không tìm thấy sản phẩm!');
    }
    res.status(200).json(product);
  } catch (error) {
    throw error;
  }
});

export const getProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).select('-reviews').populate('category');
    if (!product) {
      throw createError(404, 'Không tìm thấy sản phẩm!');
    }
    res.status(200).json(product);
  } catch (error) {
    throw error;
  }
});

export const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find().select('-reviews').populate('category');
    res.status(200).json(products);
  } catch (error) {
    throw error;
  }
});
