//instanceof 检测一个对象的 proto 是否属于某个对象
let arr = {};
console.log(arr instanceof Object); // true
console.log(arr instanceof Array); //false

console.log(arr.__proto__ == Object.prototype); // true

function A() {}
function B() {}
function C() {}
let c = new C();
// 设置B函数的原型等于c
B.prototype = c;
let b = new B();
// A函数的原型等于b
A.prototype = b;
let a = new A();

console.dir(a);
console.dir(C);
/*
    a的原型来自A的prototype，
    A的Prototype等于b，
    b的原型等于B的Prototype
*/
console.log(a instanceof B); // true
console.log(a instanceof C); // true