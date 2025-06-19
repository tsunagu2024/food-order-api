const express = require('express');
const app = express();

// ルーティング設定
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);

// ポート指定（Renderが環境変数 PORT を使う）
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
