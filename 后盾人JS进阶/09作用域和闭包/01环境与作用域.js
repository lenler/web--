// 环境的存在价值是被需要
//全局环境不会被回收

//创建好一个函数 每次调用都会创建一个新的环境    函数执行完之后 这个环境就会被销毁
let name = "李四";
function show() {
  let age = "18";
  function getname() {
    let height = ",188cm";
    console.log(name + age + height);
  }
  getname();
  // 此行代码会报错 height is not defined；因为height变量属于getname函数里面声明的一个变量
  // 也就是在getname函数的作用于中，外部获取不到里面作用于的变量
  // console.log(height);
}
// 函数执行多次，里面的内存地址也会被声明多个内存地址，执行完一次后，里面的内存地址被清理掉
// 用吃鸡游戏来比喻，每次开局都是全新的地图，上局游戏和本局游戏无关。
show();
show();
show();