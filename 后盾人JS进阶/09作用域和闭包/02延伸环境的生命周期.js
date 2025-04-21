function hd(){
    let n=0;
    function sum(){
        console.log(++n);
    }
    sum();
}
hd();
hd();
//不断去执行函数，n的值不会持续增加·
//是因为每次执行函数，都会重新创建一个新的环境，新的环境中n的值是0
// 想延长环境的生命周期，就需要将sum函数返回出去使得外部存在sum的引用 这样就可以延长环境的生命周期
// 注意必须返回引用类型
function hd1(){
    let n=0;
    function sum(){
        console.log(++n);
    }
    return sum;
}
let fn=hd1();
fn();
fn();