import Category from '../models/Category.js';

export const createCategory = async (req, res, next) => {
  const newCategory = new Category(req.body);
  try {
    const category = await newCategory.save();
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findOneAndUpdate({ slug: req.params.slug }, { $set: req.body }, { new: true });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findOneAndDelete({ slug: req.params.slug });
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};
