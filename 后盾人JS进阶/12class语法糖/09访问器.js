class user {
    constructor() {
      this.data = {};
    }
    // set 表示赋值
    set host(url) {
      if (!/^http?:\/\//i.test(url)) {
        throw new Error("地址格式错误");
      }
      this.data.host = url;
    }
    // get 表示读取值
    get host() {
      return this.data.host;
    }
  }
  let u = new user();
  u.host = "http://baidu.com";
  console.log(u.host); // http://baidu.com