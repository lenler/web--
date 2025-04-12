//通过var声明的变量会变量提升
console.log(web)//在运行代码,会执行一个解析,会将var声明的变量做一个提前 但是提前的只是声明
var web='houdunren'

//👇是具体解析过程
/* var web;
console.log(web)
web="houdunren" */


//下面展示一个致命错误
function hd(){
  if(false){
    var web='111'
  }
  console.log(web)
}
hd()//会发现还是输出undefined 一样的道理 在执行之前var声明会被提前,所以web变量被声明了但是不会执行赋值操作
