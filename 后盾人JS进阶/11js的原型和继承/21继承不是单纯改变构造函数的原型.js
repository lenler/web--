// 原型的继承 而不是改变构造函数的原型 以下代码是错误示范 请勿模仿
//对下面代码的解释就是 给实例对象换了个爹
function User(){}
User.prototype.name = function(){
    console.log(User.name);
};

function Admin(){}
Admin.prototype=User.prototype;

function Number(){}
Number.prototype = User.prototype;
//但是这样写会有很大问题 这样直接把 Admin.prototype = User.prototype，等于让两个构造函数共用同一个原型对象。这样一来，如果你后续在 Admin.prototype 上加方法或者属性，User.prototype 也会被影响，所有用 User 构造出来的实例也会跟着变，代码就容易“串味”了

// 这就是典型的原型链污染，90%新手都踩过！正确做法是用 Object.create(User.prototype) 生成一个全新的原型对象，这样 Admin 和 User 各自的原型互不影响，扩展起来更安全。
let hd = new Admin("hd");
hd.name();

