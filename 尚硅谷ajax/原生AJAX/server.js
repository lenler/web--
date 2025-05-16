const express=require('express');
const app=express();
app.get('/json-server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');//解决跨域问题  允许所有的请求
    //响应一个数据
    const data={
        name:'zs',
        age:18
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
