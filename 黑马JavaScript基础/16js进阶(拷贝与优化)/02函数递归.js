//在讲解深拷贝之前，先来学习一下函数递归
// 函数递归就是函数自己调用自己 简单举个例子
// let i=0;
// function fn(){
//   if(i>=6){
//     return
//   }
//   console.log("递归了"+i+'次');
  
//   i++;
//   fn();
// }
// fn()

//那么简单用递归做一个小案例
function nowTime(){
  let time=new Date().toDateString()
  console.log(time)
  setTimeout(() => {
    nowTime()
  }, 1000);
}
nowTime()
//这样就利用setTimeout和递归模拟了setInterval