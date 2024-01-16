import Product from '../models/Product.js';

export const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const hotel = await newProduct.save();
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = (req, res, next) => {
  res.send('UPDATE');
};

export const deleteProduct = (req, res, next) => {
  res.send('DELETE');
};

export const getProduct = (req, res, next) => {
  res.send('GET');
};

export const getProducts = (req, res, next) => {
  res.send('GET MANY');
};
