const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', bookSchema);
