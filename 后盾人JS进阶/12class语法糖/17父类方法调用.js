// 公共方法类
class controller {
    // 求出总和
    sum() {
      return this.data.reduce((o, n) => o + n.price, 0);
    }
  }
  // commt继承conlltroller
  class commit extends controller {}
  // 继承commit类
  class Lesson extends commit {
    constructor(data) {
      super();
      this.data = data;
    }
    sumPrice() {
      return {
        // super.父类方法名,先去找commit里面是否有sum方法，没有的话在找commit的原型里面是否有sum
        // 由于commit继承了controller，所以就找到了sum方法
        priceCount: super.sum(),//如果不加super就访问自己的super方法 如果我们重写了sum方法，就会调用重写的方法
        data: this.data,
      };
    }
  }
  let data = [
    {
      name: "js",
      price: 50,
    },
    {
      name: "vue",
      price: 68,
    },
    {
      name: "jquery",
      price: 99,
    },
  ];
  
  let less = new Lesson(data);
  
  console.log(less.sumPrice()); // {priceCount: 217, data: Array(3)}