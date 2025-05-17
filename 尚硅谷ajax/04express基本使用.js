//1. 引入express
const express = require('express');
//2. 创建express实例
const app = express();
//3.创建路由规则
//request是请求报文的封装
//response是响应报文的信息
app.get('/',(request,response)=>{
    //设置响应
    response.send('hello express');
})

//4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，端口3000监听中');
    console.log('服务器地址:http://127.0.0.1:8000/');
})