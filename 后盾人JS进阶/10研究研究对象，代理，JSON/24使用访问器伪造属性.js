let lesson = {
    list: [
      { name: "css", price: 60 },
      { name: "js", price: 70 },
      { name: "html", price: 80 },
      { name: "jquery", price: 90 },
      { name: "vue", price: 100 },
    ],
    // 可以利用访问器实现特定方法
    get total() {
      return this.list.reduce((v, l) => v + l.price, 0);
    },
    get namecount() {
      return `当前课程数量${this.list.length}`;
    },
    // 传入参数加到每个对象的name中
    set changename(val) {
      this.list.forEach((item) => {
        item.name = item.name + val;
      });
    },
    get changename() {
      return this.list;
    },
  };
  console.log(lesson.total); // 400
  console.log(lesson.namecount); // 当前课程数量5
  lesson.changename = "_火爆售卖中";
  //   {"name":"css_火爆售卖中","price":60},{.....}
  console.table(lesson.changename);

  //批量设置
  let web = {
    name: "lisi",
    url: "www.baidu.com",
    set site(val) {
      [this.name, this.url] = val.split(",");
    },
    get site() {
      return `${this.name}的网址是${this.url}`;
    },
  };
  web.site = "张三,www.baidu.com";
  console.log(web.site); // 张三的网址是www.baidu.com
  console.log(web.name);
  