function sum(...arg){
    return arg.length===0?0:arg.pop()+sum(...arg)
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));


//利用递归实现倒三角
function sanjiao(n){
    if(n===0){
        return ''
    }
    process.stdout.write("*".repeat(n)+'\n')
    sanjiao(n-1)
}
sanjiao(5)