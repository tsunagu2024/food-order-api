const express = require('express');
const router = express.Router();

// POST /orders
router.post('/', (req, res) => {
  const order = req.body;
  console.log('New order received:', order);
  res.status(201).json({ message: 'Order received!', order });
});

module.exports = router;
