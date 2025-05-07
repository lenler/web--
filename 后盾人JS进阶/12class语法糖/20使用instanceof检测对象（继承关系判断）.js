function User(){}
function Admin(){}
Admin.prototype=Object.create(User.prototype);
Admin.prototype.constructor=Admin;
let hd=new Admin();
console.log(hd instanceof User);//true 说明hd是User的实例
console.log(hd instanceof Admin);//true 说明 hd是Admin的实例
console.log(hd.__proto__===Admin.prototype);//true 说明hd在原型链的上一级是Admin的原型
console.log(hd.__proto__.__proto__===User.prototype);//true 说明hd在原型链的上一级的上一级是User的原型
console.log(hd.__proto__.__proto__===Admin.prototype.__proto__);//true 说明hd在原型链的上一级的上一级是Admin的原型的上一级

function checkPrototype(obj,constructor){
    if(!obj.__proto__) return false;
    if(obj.__proto__===constructor.prototype) return true;
    return checkPrototype(obj.__proto__,constructor);
}
console.log(checkPrototype(hd,Admin));//true

// 类中实现
class User {}
class Admin extends User {}
let adm = new Admin();
console.log(adm instanceof Admin); // true
console.log(adm instanceof User); // true