const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users (admin)
router.get('/', async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

module.exports = router;
