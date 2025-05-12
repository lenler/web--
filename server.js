// http://localhost:3000/api/data 访问地址  终端运行node server.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 模拟延迟（毫秒）
const delayMs = 2000; // 你可以随时改这个值，比如2000就是2秒

// GET请求示例
app.get('/api/data', (req, res) => {
  setTimeout(() => {
    res.json({ message: '这是GET请求的响应数据' });
  }, delayMs);
});

// POST请求示例
app.post('/api/data', (req, res) => {
  setTimeout(() => {
    console.log('收到POST数据:', req.body);
    res.json({ message: '数据已接收', data: req.body });
  }, delayMs);
});

// 用户数据文件路径
const fs = require('fs');
const path = require('path');
const userFile = path.join(__dirname, 'user.json');

// GET请求：获取用户列表
app.get('/api/user', (req, res) => {
  setTimeout(() => {
    fs.readFile(userFile, 'utf-8', (err, data) => {
      if (err) {
        return res.status(500).json({ message: '读取用户数据失败' });
      }
      res.json({ users: JSON.parse(data) });
    });
  }, delayMs);
});

// POST请求：新增用户
app.post('/api/user', (req, res) => {
  setTimeout(() => {
    const newUser = req.body;
    fs.readFile(userFile, 'utf-8', (err, data) => {
      if (err) {
        return res.status(500).json({ message: '读取用户数据失败' });
      }
      let users = JSON.parse(data);
      newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
      users.push(newUser);
      fs.writeFile(userFile, JSON.stringify(users, null, 2), err => {
        if (err) {
          return res.status(500).json({ message: '保存用户失败' });
        }
        res.json({ message: '用户已添加', user: newUser });
      });
    });
  }, delayMs);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});