// 定义基础函数
function User() {}
User.prototype.show = function() {
  console.log("User-show");
};
User.prototype.site = function() {
  return "User-site";
};

// 定义子类
function Admin(){}
Admin.prototype=Object.create(User.prototype);
Admin.prototype.constructor=Admin;
//方法重写(类似于@override)
Admin.prototype.show=function(){
    console.log(User.prototype.site()+"Admin-show");
    //调用父级的方法(类似于super)
}
let admin = new Admin();
admin.show();