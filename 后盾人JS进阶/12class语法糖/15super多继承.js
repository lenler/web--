// show方法中的this指向commit
let user = {
    name: "user",
    show() {
      // this永远执行调用者，因为是commit调用的，所以指向commit
      console.log("user的方法，" + this.name);
    },
  };
  
  let admin = {
    __proto__: user,
    name: "admin",
    show() {
      // 这里面的this执行admin，会出现死循环
      // this.__proto__.show.call(this)
  
      // 采用super()解决多重继承的问题，super只用来做原型攀升
      super.show();
      console.log("admin的方法，" + this.name);
    },
  };
  
  let commit = {
    __proto__: admin,
    name: "commit",
    show() {
      // 此时this指向admin
      // this.__proto__.show.call(this)
  
      // 采用super()解决多重继承的问题，super只用来做原型攀升
      super.show();
      console.log("commit的方法，" + this.name);
    },
  };
  
  commit.show();