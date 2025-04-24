function factorial(num) {
    return num == 1 ? num : num * factorial(num - 1);
  }
  
  // console.log(factorial(5));
  const proxy = new Proxy(factorial, {
    // 第一个参数时函数本身，obj指上下文的this, args 传递的值
    //apply 之前学过 是可以指定函数的this 并且调用函数
    apply(func, obj, args) {
      console.time('run');
      func.apply(this, args); // func 是函数本身
      console.timeEnd('run');
    },
  });
  proxy.apply(this, [5]); // 120