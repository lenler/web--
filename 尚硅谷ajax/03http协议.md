# http协议
http协议就是超文本传输协议 绝大多数网页都是http协议,是一种无状态协议,服务器不会保存任何客户端的状态信息,每次请求都是独立的,不会受到上一次请求的影响

## 请求报文
重点还格式与参数
```
请求行: GET(请求类型)/ s?ie=utf-8(请求路径)/ HTTP/1.1
请求头: Host: www.baidu.com
       Cookie: BIDUPSID=456
       Contene-Type: application/x-www-form-urlencoded
       User-Agent: chorome 83
空行
请求体:可有可无(如果是get请求 请求体可以为空,如果是post请求 请求体不能为空) Username=admin&Password=123456
```

## 响应报文
```
行 状态码 状态信息 HTTP/1.1 200 OK
头
空行
体
```
状态码有很多 比如:
* 200 成功
* 404 找不到
* 500 服务器内部错误