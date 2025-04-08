//1.给数组拓展求最大值和求和的方法
//定义的方法任何一个数组的实例对象都能用
Array.prototype.Sum=function(){
  let sum=0
  for(let i=0;i<this.length;i++){
    sum+=this[i]
  }
  return sum
},
Array.prototype.Max=function(){
  return Math.max(...this)
}
//上述两个原型对象方法都需要this来做参数，上一节讲到this指向的是实例对象，实例对象就是我们需要的参数
const arr=[1,2,3]
console.log(arr.Max());
console.log(arr.Sum());
