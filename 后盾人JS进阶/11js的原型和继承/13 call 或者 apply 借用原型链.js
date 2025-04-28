//利用call 和 apply 借用原型链
// 以前学习的call 和 apply 是改变函数的this指向
// 定义user对象
let user = {
    data: [1, 65, 48, 5, 4, 12, 4, 5, 65, 9, 25],
  };

// 通过setPrototypeOf设置user的prototype为max方法
Object.setPrototypeOf(user, {
    max() {
      return this.data.sort((a, b) => b - a)[0];
    },
});
// 利用原型上的max方法求出最大值
console.log(user.max()); // 65

let xiaozhang={
    lesson: {
        js: 95,
        css: 85,
        html: 100,
      },

      // get访问器 返回value值组成的数组
      get data() {
        // 读取对象的所有值
        return Object.values(this.lesson);
      },
}
console.log(xiaozhang.data); // 95 85 100
// 利用apply借用user对象中的max方法求出最大值
// 将max中的this指向ls
console.log(user.max.call(xiaozhang));
console.log(user.max.apply(xiaozhang));
console.log(user.max.bind(xiaozhang)());


