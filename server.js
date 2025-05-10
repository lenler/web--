// http://localhost:3000/api/data 访问地址  终端运行node server.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// GET请求示例
app.get('/api/data', (req, res) => {
  res.json({ message: '这是GET请求的响应数据' });
});

// POST请求示例
app.post('/api/data', (req, res) => {
  console.log('收到POST数据:', req.body);
  res.json({ message: '数据已接收', data: req.body });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});