//私有属性 完全属于某个类 外部和子类无法访问
class user {
    // 私有属性
    #host = "http://baodu.com";
    constructor() {}
    set host(name) {
      // 类内部使用私有属性
      this.#host = name;
    }
    get host() {
      return this.#host;
    }
    // 私有方法
    #gethsot() {
      return this.#host + "私有方法";
    }
    gethost() {
      // 类内部使用私有方法
      return this.#gethsot();
    }
  }
  
  let u = new user();
  u.host = "555";
  console.log(u.host);
  console.log(u.gethost());
  
  // u.#gethsot() 运行报错