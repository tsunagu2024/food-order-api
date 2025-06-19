const express = require('express');
const router = express.Router();

// 仮の注文データ
const orders = [];

// POST /orders
router.post('/', (req, res) => {
  const { itemId, quantity, note } = req.body;

  if (!itemId || !quantity) {
    return res.status(400).json({ status: 'error', message: 'itemIdとquantityは必須です' });
  }

  const newOrder = {
    id: orders.length + 1,
    itemId,
    quantity,
    note: note || '',
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);

  res.json({ status: 'success', message: '注文を受け付けました', order: newOrder });
});

// GET /orders
router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;
