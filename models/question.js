// question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: String,
  content: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }]
});

module.exports = mongoose.model('Questions', questionSchema);