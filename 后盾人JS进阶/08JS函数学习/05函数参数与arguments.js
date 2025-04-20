function hd(a){
    return a<=3
}
let arr=[1,2,3,4,5].filter(hd)
console.log(arr);

// 最新的语法中可以用 ...XXX 接收传递过来的参数
function args(...arg) {
    console.log(arg);
}
args(5, 4, 8, 5, 4, 8, 5, 4, 5, 8, 6);

//一般展开语法和默认参数都放在函数参数的最后面 其中展开语法放在默认参数的后面

// 动态参数
// 参数的数量可变 比如求和函数可以输入任意数量参数求和
// arguments 函数内部的伪数组变量
function getSum(){
console.log(arguments);//动态参数 只存在函数里面 是一个伪数组
let sum=0
for(let i=0;i<arguments.length;i++){
    sum+=arguments[i]
}
return sum;
}
console.log(getSum(1,2,43,5,6,6))

//或使用展开运算符将伪数组转化成数组
function getSum2(...args){
    return args.reduce((pre,cur)=>pre+cur,0)
}
console.log(getSum2(1,2,43,5,6,6))