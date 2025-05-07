const balances = new WeakMap()
class User {
  constructor(money) {
    balances.set(this, money) // 用实例本身做键
  }
  getBalance() {
    return balances.get(this) // 外部拿不到这个Map
  }
}
const u = new User(100)
console.log(u.getBalance());

//一个类存在多个属性情况
const info=new WeakMap();
class Person{
    constructor(name,age){
        info.set(this,{name,age});
    }
    get name(){
        return info.get(this).name
    }
    get age(){
        return info.get(this).age
    }
    set name(name){
        info.get(this).name=name;
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade=grade;
    }
}
const s=new Student('张三',18,1);
console.log(s.name);
console.log(s.age);
console.log(s.grade);