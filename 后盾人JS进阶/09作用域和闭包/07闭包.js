// 闭包 
// 闭包就是能够读取其他函数内部变量的函数
function f1() {
    let n=1;
    return function(){
        console.log(n++);
    }
}
let a=f1();
a();
a();