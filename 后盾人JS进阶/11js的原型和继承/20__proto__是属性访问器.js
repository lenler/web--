// 设置一个对象的__proto__时必须使其等于一个对象，否则不会被赋值
let hd={name:"hd"};
hd.__proto__={
    show(){
        console.log(this.name);
    }
}
hd.show();
hd.__proto__=1;
hd.show()//发现正常输出了hd 
// 为什么呢
// 打印分析后发现__proto__有get和set两个属性
// 所以 __proto__不是一个具体的属性，而是一个属性访问器
// 当set __proto__ 值的时候会判断所赋值是不是object，如果是的话就进行赋值不是的话不会赋值

// 原理实例
let newuse = {
    active: {
      name: "lisi",
    },
    // 使用构造器声明proto
    get proto() {
      return this.active;
    },
    set proto(obj) {
      // 给__protp__赋值的时候判断值的类型
      if (obj instanceof Object) {
        this.active = obj;
      }
      return true;
    },
  };