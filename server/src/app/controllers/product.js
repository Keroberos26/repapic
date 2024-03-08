import { createError } from '../../utils/error.js';
import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

export const createProduct = asyncHandler(async (req, res) => {
  const product = await new Product(req.body);
  product.save();
  res.status(201).json(product);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOneAndUpdate({ slug: req.params.slug }, { $set: req.body }, { new: true });
  if (!product) {
    throw createError(404, `No Product Match Slug ${req.body.slug}. `);
  }
  res.status(200).json(product);
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOneAndDelete({ slug: req.params.slug });
  if (!product) {
    throw createError(404, `No Product Match Slug ${req.body.slug}. `);
  }
  res.status(200).json(product);
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (!product) {
    throw createError(404, `No Product Match Slug ${req.body.slug}. `);
  }
  res.status(200).json(product);
});

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  if (!products) {
    throw createError(404, 'Không tìm thấy sản phẩm nào!');
  }
  res.json(products);
});
