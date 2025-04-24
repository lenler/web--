// 定义构造函数
let user = function(name, age) {
    let data = { name, age };
    Object.defineProperties(this, {
      name: {
        get() {
          return data.name + "555";
        },
        set(val) {
          data.name = val;
        },
      },
      age: {
        get() {
          return data.age;
        },
        set(val) {
          val > 10 && val < 100
            ? (data.age = val)
            : console.error("age格式不正确");
        },
      },
    });
  };
  
  let use = new user("lisi", 18);
  use.name = "李四";
  use.age = "50";
  console.log(use);
  
  // Class 语法糖
  
  //使用Symbol设置唯一值，外界不能直接改变类里面的值
  const DATA = Symbol();
  class User {
    constructor(name, val) {
      this[DATA] = { name, val };
    }
    get name() {
      return this[DATA].name;
    }
    set name(val) {
      this[DATA].name = val;
    }
  }
  
  let newuse = new User("lisi", 18);
  newuse.name = "999";
  
  console.log(newuse);