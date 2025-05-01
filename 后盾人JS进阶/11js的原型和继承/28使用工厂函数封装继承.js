// 初始化构造函数
function User(name, age) {
    this.name = name;
    this.age = age;
}
  // 在原型上添加show方法
User.prototype.show = function() {
    console.log(`${this.name},${this.age}`);
}
  
  // 搭建工厂函数
function extend(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    Object.defineProperty(sub.prototype, "construciton", {
      value: sub,
      enumerable: false,
  });
}
  
function Mumber(...args) {
    User.apply(this, args);
}
  // 使Munber函数和User函数扯上关系
  extend(Mumber, User);
  let mumber = new Mumber("李四", 18);
  mumber.show()


  //练习 继承函数
  function extend(sub,sup){
    sub.prototype=Object.create(sup.prototype);
    sub.prototype.constructor=sub;
  }