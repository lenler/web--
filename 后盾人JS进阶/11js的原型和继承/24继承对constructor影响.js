// 声明User构造函数
function User() {}
// 给User的原型添加show方法
User.prototype.show = function() {
  console.log("User show");
};

// 声明Info构造函数
function Info() {}
// 使用Object.create()方法继承User的原型 
Info.prototype = Object.create(User.prototype);


// 再打印User的结构
console.log(User.prototype); // {show: ƒ, constructor: ƒ}
// 这个时候打印Info的结构
console.log(Info.prototype); // {}

//所以如果改变了一个对象的原型,要重新填写constructor的指向
Info.prototype.constructor=Info;
console.log(Info.prototype); // {constructor: ƒ} 

/* 上面代码中 Info 的 prototype 原型中的 constructor 没有了，就是因为使用 Object.create 过程中吧 Info 的 constructor 弄丢了，此时去实例化两个构造函数，分别打印出实例化变量的 constructor，发现打印的结果都是 User */