//js中函数也可以new出来 不过推荐使用字面量的形式声明
// 字面量方式声明函数
function logtitle(title) {
  console.log(title);
}
logtitle("6666");

// 表达式声明函数,结尾要加分号，不加分号在打包是可能会出错
let logmsg = function(msg) {
  console.log(msg);
};
logmsg("888");

// 对象中使用函数
let obj = {
  name: null,
  setUserName(name) {
    this.name = name;
  },
  getUserName() {
    return this.name;
  },
};
obj.setUserName("lisi");
console.log(obj.getUserName());