class user {
    constructor(name) {
      this.name = name;
    }
    age = 10;
    show() {}
  }
  
  let u = new user();
  console.dir(user);
  
  for (const key in u) {
    console.log(key); // name age
  }
  // enumerable: false 不能遍历
  console.log(Object.getOwnPropertyDescriptor(user.prototype, "show"));
  
  function hide() {}
  hide.prototype.show = function() {};
  let h = new hide();
  for (const key in h) {
    console.log(key); // show
  }
  // 查看普通方法这个show的属性发现enumerable: true
  console.log(Object.getOwnPropertyDescriptor(hide.prototype, "show"));