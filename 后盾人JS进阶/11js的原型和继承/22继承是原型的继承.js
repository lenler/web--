// 正确的继承方式
function User(){}
User.prototype.show=function(){
    console.log("show");
}
function Admin(){}
// 正确继承：让 Admin.prototype 通过 Object.create 继承 User.prototype，避免原型链污染
// Admin.prototype.__proto__ = User.prototype;
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.role = ()=>{
    console.log("role");
};
//可以将Admin的原型设置为User的原型并且不会污染原型链，原理是新建一个原型对象，然后将Admin的原型设置为这个原型对象，但是原来的原型对象上的属性不会被继承，所以需要将原来的函数放在这个原型对象上
let admin = new Admin();
admin.show();
admin.role();