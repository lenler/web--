class Person{
    name;
    constructor(name){
        this.name = name;
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