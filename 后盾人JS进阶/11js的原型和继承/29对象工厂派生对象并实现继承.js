function User(name, age) {
    this.name = name;
    this.age = age;
  }
  User.prototype.show = function() {
    console.log(`${this.name},${this.age}`);
  };
  
  function admin(name ,age){
    //我们直接创建一个对象 然后让这个对象的原型指向User的原型
    const instance=Object.create(User.prototype);
    //使用call来改变this指向 并且继承父级的属性
    User.call(instance,name,age);
    //也能添加方法
    instance.say=function(){
      console.log("我是管理员");
    }
    return instance;
  }
  let hd=admin("hd",20);
  hd.show();
  hd.say();