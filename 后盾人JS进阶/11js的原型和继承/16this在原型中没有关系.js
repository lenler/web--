//this在原型中没有关系 他一直指向的是调用者
// 首先声明对象
let hd = {
    name: "李四",
  };
  // 声明第二个对象
  let User = {
    name: "张三",
    show() {
      console.log(this); // {name: "李四"}
      console.log(this.name);
    },
  };
  
  // 改变hd的原型
  Object.setPrototypeOf(hd, User);
  // this只会指向调用者本身，打印的結果仍然是hd对象里面的李四
  hd.show(); // 李四