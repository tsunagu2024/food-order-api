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
