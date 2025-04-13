function  show() {
  web='houdunren'
}
show()
console.log(web);
// 运行会发现本来在块作用域下的 未声明变量web 居然在全局中可以使用了 这就是全局污染
// 这里全局污染同样污染括了引入的其他js文件

//所以一定要先声明 再使用