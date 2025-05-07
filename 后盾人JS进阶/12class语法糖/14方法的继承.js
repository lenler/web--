class Person{
    name;
    constructor(name){
        this.name = name;
    }
    say(){
        console.log('hello');
    }
}

class Student extends Person{
    #age;
    constructor(name,age){
        super(name);// 调用父类的构造函数 
        this.#age = age;
    }
    getAge(){
        return this.#age;
    }
}
let s=new Student('zs',18);
console.log(s.getAge());
console.log(s.name);
s.say();//这里就是继承了父类的方法 原理就是原型链的继承