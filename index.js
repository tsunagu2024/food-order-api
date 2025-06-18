const express = require('express');
const router = express.Router();

// 仮の商品データ
const items = [
  { id: 1, name: 'おにぎり', price: 120 },
  { id: 2, name: '味噌汁', price: 100 },
  { id: 3, name: 'たまご焼き', price: 150 }
];

// GET /items
router.get('/', (req, res) => {
  res.json(items);
});

module.exports = router;
