const Category = require('../models/category');

exports.getAllCategories = async () => {
  return Category.find();
};
