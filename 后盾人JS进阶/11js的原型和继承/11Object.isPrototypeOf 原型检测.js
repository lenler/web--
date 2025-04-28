/* Object.isPrototypeOf 检测一个对象原型是否是一个对象的原型长辈
简单理解，就是一个对象是否是另一个对象的长辈 */
let a = {};
let b = {};
// Object.isPrototypeOf 检测一个对象原型是否是一个对象的原型长辈
console.log(b.isPrototypeOf(a)); // false
// 设置a的原型等于b的原型,相当于a的父亲等于了b
Object.setPrototypeOf(a, b);
console.log(b.isPrototypeOf(a)); // true 
console.log(Object.isPrototypeOf(b));//因为这里的Object只是一个构造函数 而Object.prototype才是一个对象的原型
console.log(Object.prototype.isPrototypeOf(b,a));//true

