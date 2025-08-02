const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Get all transactions (admin)
router.get('/', async (req, res) => {
  const transactions = await Transaction.find().populate('user').populate('book');
  res.json(transactions);
});

// Create a transaction (borrow or return)
router.post('/', async (req, res) => {
  const { user, book, type } = req.body;
  const transaction = await Transaction.create({ user, book, type });
  res.json(transaction);
});

module.exports = router;
