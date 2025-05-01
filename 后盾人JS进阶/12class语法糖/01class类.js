// 类可以让面向对象编程更加简单
// 类的写法比函数写法更清晰简单 本质是js帮我们实现了原型继承的函数 所以叫语法糖
class User{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    show(){
        console.log('show')
    }
    get(){
        console.log('get')
    }
}
let hd=new User()
hd.show()
hd.get()