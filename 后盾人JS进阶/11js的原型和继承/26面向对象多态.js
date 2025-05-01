function User() {}
User.prototype.show = function() { console.log('我是普通用户'); }

function Admin() {}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
// Admin 重写 show 方法
Admin.prototype.show = function() { console.log('我是管理员'); }

//其实就是一个方法在不同状态(实例对象的原型不同)下,响应不同的结果
let user=new User();
let admin=new Admin();
user.show();
admin.show();