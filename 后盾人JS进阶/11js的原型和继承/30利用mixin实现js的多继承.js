//js是没有多继承的 多继承就是一个类继承多个类 java里面叫接口 
// 建设工厂函数，方便继承
function exted(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    Object.defineProperty(sub.prototype, "construstion", {
      value: sub,
      enumerable: false,
    });
  }
  // 定义多个功能对象
  
  // 获取地址
  const Address = {
    getaddress() {
      console.log("获取地址");
    },
  };
  // 请求接口
  const Request = {
    ajax() {
      return "接口返回";
    },
  };
  // 获取手机号
  const Iphone = {
    // 单独方法也可以继承其他原型
    __proto__: Request,
    getiphone() {
      console.log(super.ajax() + "获取手机号");
    },
  };
  // 获取姓名
  const GetName = {
    getname() {
      console.log(this.name);
    },
  };
  
  // User函数
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  User.prototype.show = function() {
    console.log(this.name, this.age);
  };
  
  // 使用 Object.assign 往User当中添加多个方法类
  /*
              Object.assign可以往对象中添加属性
              添加完之后可以不用层层继承实现调用其他对象里面的功能
    */
  User.prototype = Object.assign(User.prototype, Address, GetName, Iphone);
  console.dir(User);
  
  // 定义admin构造函数
  function Admin(...args) {
    User.apply(this, args);
  }
  // 使Admin继承User
  exted(Admin, User);

  let admin = new Admin("李四", 15);
  admin.show();
  admin.getaddress();
  admin.getname();
  admin.getiphone();