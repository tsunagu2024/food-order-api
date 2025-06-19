const express = require('express');
const router = express.Router();

const orders = []; // 仮の注文保存（サーバー再起動で消える）

// POST /orders
router.post('/', (req, res) => {
  const order = req.body;
  orders.push(order); // 配列に保存
  console.log('New order received:', order);
  res.status(201).json({ message: 'Order received!', order });
});

// GET /orders
router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;
