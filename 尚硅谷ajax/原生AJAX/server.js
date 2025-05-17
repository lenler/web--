const express=require('express');
const app=express();
app.get('/json-server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');//解决跨域问题  允许所有的请求
    //响应一个数据
    const data={
        "students": [
          {
            "id": "20230001",
            "name": "张三",
            "Chinese": 88,
            "Math": 92,
            "English": 85,
            "total": 265
          },
          {
            "id": "20230002",
            "name": "李四",
            "Chinese": 76,
            "Math": 81,
            "English": 79,
            "total": 236
          },
          {
            "id": "20230003",
            "name": "王五",
            "Chinese": 90,
            "Math": 87,
            "English": 93,
            "total": 270
          },
          {
            "id": "20230004",
            "name": "赵六",
            "Chinese": 65,
            "Math": 70,
            "English": 68,
            "total": 203
          },
          {
            "id": "20230005",
            "name": "孙七",
            "Chinese": 82,
            "Math": 78,
            "English": 80,
            "total": 240
          }
        ]
      }
    JSON.stringify(data);
    response.send(data);
    // response.send('hello express');
})//如果请求行的路径是url的路径 就会响应
app.post('/json-server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');//解决跨域问题  允许所有的请求
    response.setHeader('Access-Control-Allow-Headers','*');//解决跨域问题  允许所有的请求
    response.send('hello express');
})
app.listen(8000,()=>{
    console.log('服务已经启动，端口8000监听中');
    console.log('服务器地址:http://127.0.0.1:8000');
})
