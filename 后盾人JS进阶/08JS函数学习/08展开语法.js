// 展开语法的收和放
// 收（...在等号左边）
let arr1 = [1, 2, 3, 4, 5];
// 下面定义可以吧arr1数组里面的第一个值给a1,剩余的值都给a
let [a1, ...a] = arr1;
console.log(a1, a);

// 放
let arr2 = [1, 2, 3];
// 下面写法可以吧arr2数组中的值分别赋值给d，e，f
let [d, e, f] = [...arr2];
console.log(d, e, f);
// 或者直接打印展开的arr2
console.log(...arr2);

// 计算商品总价和折扣后的值
function sum(){
    return[...arguments].reduce((pre, cur) => pre + cur);
}
console.log(sum(0, 20, 30, 40, 50));

