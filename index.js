const express = require('express');
const app = express();

// ★ ここを追加
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

app.get('/', (req, res) => {
  res.send('API is working!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
