class Person{
  #name
  #age

  constructor(name,age){
    this.#name=name
    this.#age=age
  }
  sayHi(){
    console.log("Hi")
  }
  //必须加get方法和set方法
  //不定义get name()直接console.log(p1.name)任然可以输出姓名，但是这里输出的name并不是#name，而是一个新的内存空间中存储的公共字段的name，这样会造成内存的浪费
  //当执行console.log(p1.name)时：如果没有get方法，p1.name其实访问的是name这个公共字段，不是私有字段#name，在访问的同时会发生一个隐式创建，name这个公共字段因为未被创建系统检测不到，就会自动创建一个name字段，而不是去访问#name，这样就会重新在新内存创建一个值和#name相等的新属性name造成内存浪费，这是js独有的机制

  get name(){
    return this.#name
  }

  set name(name){
    this.#name=name
  }
}

const p1=new Person(`wuyifan`,18)
p1.sayHi()
console.log(p1.name);//这里自动调用了getter

