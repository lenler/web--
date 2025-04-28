// 使用字面量的形式声明数字时相当于 new Number()
// 当 Number()被实例化对象时，Number的prototype会给到实例化对象的__proto__
let number = 55; // new Number();
console.log(number.__proto__ == Number.prototype);

let obj = {}; // new Object()
console.log(obj.__proto__ == Object.prototype);

let arr = [];
console.log(arr.__proto__ == Array.prototype);

let str = "";
console.log(str.__proto__ == String.prototype);

let bol = true;
console.log(bol.__proto__ == Boolean.prototype);

//当然我们想为某个构造函数添加一个方法时 可以通过prototype来实现
Array.prototype.show=function(){
    console.log('show');
}
arr.show();//show
//当然我们也可以通过__proto__来实现
//但是不推荐 因为这样会污染原型链 影响其他实例的使用
arr.__proto__.show2=function(){
    console.log('show2');
}
arr.show2();//show2