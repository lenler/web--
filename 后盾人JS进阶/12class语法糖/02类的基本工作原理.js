class User {}
// 打印类的结构
console.dir(User);
// 对比这User构造函数是否等于他的prorotype里面的constructor
console.log(User === User.prototype.constructor); // true

function getName() {}
// 打印方法的结构
console.dir(getName);
// 给类添加一个show方法
class Name {
  show() {}
}
console.dir(Name);
// 给方法的原型添加一个show方法
function getuser() {}
getuser.prototype.show = function() {};
console.dir(getuser);
// 对比发现给类添加方法后就是往原型中添加的方法
// 打印对象的所有自身属性的属性名（包括不可枚举的属性）
console.log(Object.getOwnPropertyNames(Name));
console.log(Object.getOwnPropertyNames(getuser));