// 定义两个对象，现需要吧obj的父级原型设置为 objparent
let obj = {
    name: "lisi",
  };
  
  let objparent = {
    name: "张三",
    show() {
      console.log(this.name);
    },
  };
//指定父级原型 类似于继承
Object.setPrototypeOf(obj, objparent);//设置obj的父级原型为objparent
obj.show();//lisi 

// 读取对象原型 Object.getPrototypeOf ()
console.log(Object.getPrototypeOf(obj));//{ name: '张三', show: [Function: show] } 
