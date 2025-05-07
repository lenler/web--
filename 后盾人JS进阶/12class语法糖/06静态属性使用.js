//静态属性static
// 在类中属性前面加上 static 表示声明了静态属性，静态属性在类外面无法使用，是能在类内部使用
class Request {
    host = "https://www.biadu.com"
}
let obj=new Request();
console.log(obj.host);
let obj2=new Request();
console.log(obj2.host);
obj.host="www.baidu.com"
console.log(obj.host);
console.log(obj2.host);
//会发现改变obj的host属性值，obj2的host属性不会改变

class Request2 {
    static host = "https://www.URL_ADDRESS"
    api(ulr){
        return Request2.host+`/${ulr}`//这里想调用静态属性host 必须使用类名来调用
    }
}
let obj3=new Request2();
console.log(obj3);//输出为空对象 说明静态属性无法在类外面使用
console.log(obj3.api("index"));
