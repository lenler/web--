//子类使用 super () 表示要改变父类 this 指向，指向子类
// 普通方法继承
function user(name) {
    this.name = name;
  }
  function admin(name) {
    // 不加这一行代码下面的a打印出来是没有内容的，相当于super,必须先执行以下父类的代码
    user.call(this, name);
  }
  let a = new admin("Lisi");
  console.log(a);
  
  // 类中实例
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  class Admin extends User {
    constructor(name) {
      // super必须放到子类的constructor的this之前
      super(name);
      // 子类的优先级要比父类优先级高，子类可以覆盖父类的同名属性
      this.name = "new name";
    }
  }
  let ad = new Admin("ss");
  console.log(ad);