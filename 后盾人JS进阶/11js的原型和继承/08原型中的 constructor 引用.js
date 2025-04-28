//其实很简单 我们对照05那个图就很清楚
//1.先创建一个构造函数
function User(name){
    this.name=name;
}
/* // 下面看不懂就去看05那个图
console.log(User.prototype.__proto__==Object.prototype);//true 
console.log(User.prototype.constructor==User);//true 
let user1=new User('lisi');
console.log(user1);//User { name: 'lisi' } */

//但是 我们通过prototype来添加新的方法一般要重新指定一下构造函数
User.prototype={
    //如果不添加这个 那么构造函数就会变成Object
    constructor:User,
    show(){
        console.log(this.name);
    }
}
let user1=new User('lisi');
console.log(user1.constructor);//[Function: User]