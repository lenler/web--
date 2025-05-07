const secret = Symbol('secret');
class User {
  [secret] = '私密数据';
  getSecret() {
    return this[secret];
  }
}
const u = new User();
console.log(u.secret); // undefined
console.log(u.getSecret()); // '私密数据'

//结合getter ：
const priceSymbol = Symbol('price');
class Product {
  constructor(price) {
    this[priceSymbol] = price;
  }
  get price() {
    return this[priceSymbol];
  }
}
let p = new Product(100);
console.log(p.price);//100

//练习 设置一个姓名类 保护起来不能修改
const uname=Symbol('name');//细节 将需要保护的属性名放在外面 使用Symbol类型
class Name{
    constructor(name){
        this [uname]=name;//细节:this不需要➕"." 会自动识别
    }
    get name(){
        return this [uname];
    }
}
let n=new Name('张三');
n.name='李四';
console.log(n.name);//张三
class Person extends Name{
    constructor(name,age){
        super(name);
        this.age=age;
    }

}
let p1=new Person('李四',18);
console.log(p1.name);//李四
console.log(p1.age);
