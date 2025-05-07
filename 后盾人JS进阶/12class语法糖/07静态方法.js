function User(){}
User.prototype.show = function(){
    console.log("show");
}//这是将方法添加到实例对象的原型上 这样不会占用内存
User.show=function(){
    console.log("static show");
}//这样定义方法就是静态方法 函数本身就是对象 我们直接将方法添加到对象上

User.show()

class User2{
    static show(){
        console.log("static show");
    }
    show(){
        console.log("show");
    }
}
User2.show()//静态方法
let hd=new User2();
hd.show();//实例方法


// 例子
class createName {
    constructor(name, age, sex) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
    static create(...args) {
      // this相当于createName这个类
      return new this(...args);
    }
  }
  
  let zs = createName.create("张三", "18", "男");
  
  console.log(zs);
  for (const key in zs) {
    console.log(key + ":" + zs[key]);
  }