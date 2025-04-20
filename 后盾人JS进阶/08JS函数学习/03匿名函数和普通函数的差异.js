
/* let hd=function(){
  console.log('hd')
}
hd()
 */
//现在将调用提升
/* show()
function show(){
    console.log('houdun');
} */
// 会发现运行不会报错，但是将hd（）放在声明前面就会报错 这就是函数提升

//还有一个小细节就是先声明一个普通函数 再用var声明一个同名匿名函数 那么函数的调用位置就决定了函数的执行结果
function hd(){
  console.log('普通函数')
}
hd()//普通函数

var hd=function(){
  console.log('匿名函数') 
}
hd()// 匿名函数


// 匿名函数
function sum(...args){
    return args.reduce(function(pre,cur){
        return pre+cur
    })
    // 这里的function就是匿名函数
}