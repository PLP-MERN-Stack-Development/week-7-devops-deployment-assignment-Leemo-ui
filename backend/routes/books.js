const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Add a book (admin only, add auth middleware as needed)
router.post('/', async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});

module.exports = router;
