//其实就是java里使用super来调用父级的属性
function User(name,age){
    this.name=name;
    this.age=age;
    this.show=function(){
        console.log(this.name+"-"+this.age);
    }
}
function Admin(...args){
    // 引用构造函数User,通过apply改变User的this指向为当前Admin实例
    // 并将接收到的参数传递给User，实现初始化属性在User当中完成
    User.apply(this, [...args]);
    // 或者使用 arguments 对象： User.apply(this, arguments);
}
Admin.prototype=Object.create(User.prototype);
Admin.prototype.constructor=Admin;

let admin=new Admin("admin",18);
admin.show();
