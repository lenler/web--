// 定义一个初始对象
let User = {
    show() {
      console.log(this.name);
    },
  };

// Object.create给变量定义原型，这个方法不能用于获取原型
let use = Object.create(User);
// 给use对象设置name值
use.name = "李四";
console.log(use);
// 使用原型中的show方法
use.show();

// 利用__proto__设置原型
let newuse = {
    name: "王五",
  };
  // 如果__proto__后面跟上了等于的值，表示设置原型
  newuse.__proto__ = User;
  // 如果__proto__后面没有值表示读取原型
  console.log(newuse.__proto__);
  newuse.show();