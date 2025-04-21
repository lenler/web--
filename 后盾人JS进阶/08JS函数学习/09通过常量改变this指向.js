let user = {
    weight: "75kg",
    height: "188cm",
    lists: ["js", "css", "html"],
    show: function() {
      // map可以接收一个参数，传入this，则方法里面的this指向就是对象的this
      
/*       return this.lists.map(function() {
        console.log(this);
      }, this);
 */
      // 箭头函数里面的this指向的是外层的this
      return this.lists.map(() => {
        console.log(this);
      });
    },
  };
  console.log(user.show());