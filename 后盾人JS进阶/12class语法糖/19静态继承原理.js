// 普通方法实现原理
function user() {}
user.size = "user.size";
user.show = () => {
  console.log(user.size);
}; 
user.show(); // user.size

function admin() {}
// admin方法继承user的静态方法
admin.__proto__ = user;
// 通过打印看到admin的__proto__的原型里面有了user的方法
console.dir(admin);
// 继承之后用admin也可以访问user里面的方法
admin.show(); // user.size

// 通过类实现静态继承
class User {
  static size = "Class.User.size";
  static show() {
    console.log(this.size); // Class.User.size
    console.dir(this); // User
  }
}
// Admin类继承了User类
class Admin extends User {}
// 通过Admin调用了User类的静态方法
Admin.show();