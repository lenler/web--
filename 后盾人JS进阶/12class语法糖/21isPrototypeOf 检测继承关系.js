let a={}//最高级
let b={//次一级 子类
    __proto__:a
}
let c={//次b级 子类
    __proto__:b
}
console.log(a.isPrototypeOf(b));//true
console.log(a.isPrototypeOf(c));//true

class User {}
class Admin extends User {}
let ad = new Admin();
// Admin的prototype是否在ad的原型链上
console.dir(Admin.prototype.isPrototypeOf(ad)); // true