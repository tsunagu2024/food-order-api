const express = require('express');
const router = express.Router();

// 仮のデータ
const items = [
  { id: 1, name: 'りんご', price: 120 },
  { id: 2, name: 'にんじん', price: 80 },
  { id: 3, name: 'じゃがいも', price: 60 },
];

router.get('/', (req, res) => {
  res.json(items);
});

module.exports = router;

// POST /items
router.post('/', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ status: 'error', message: 'nameとpriceは必須です' });
  }

  const newItem = {
    id: items.length + 1,
    name,
    price,
  };

  items.push(newItem);

  res.json({ status: 'success', message: '商品を追加しました', item: newItem });
});
