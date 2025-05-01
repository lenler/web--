//Object.setPrototypeOf () 设置对象原型
// 定义一个初始对象
let User = {
    show() {
      console.log(this.name);
    },
  };
  
  // Object.setPrototypeOf()设置对象原型
  let use = {
    name: "李四",
  };
  Object.setPrototypeOf(use, User);
  use.show();
  
  // Object.getPrototypeOf()查看对象原型
  console.log(Object.getPrototypeOf(use));