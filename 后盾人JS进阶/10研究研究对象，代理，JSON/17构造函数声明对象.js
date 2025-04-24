function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}
let p1 = new Person('张三', 18, '男')
console.log(p1)
//利用构造函数创建的对象有原型