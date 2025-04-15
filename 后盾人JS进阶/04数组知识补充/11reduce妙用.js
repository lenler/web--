// reduce 数组累计器 常用来数组求和 有时候会自带初始值
/* const total=arr.reduce(function(prev,cur){
  // prev 上一次的返回值 cur 当前遍历的元素
  return prev+cur
})
console.log(total); //55
const total2=arr.reduce(function(prev,cur){
    return prev+cur
},10)
console.log(total2); //65
 */

//利用reduce方法来实现寻找数组最大值
let arr=[1,2,3,4,5,56,6,67,7,7,8]
function findArrayMax(arr){
  return arr.reduce((pre,cur)=>pre>cur?pre:cur)
}
console.log(findArrayMax(arr));

// 案二 筛选商品价格函数
let cart=[{name:'iphone',price:12222},{name:'ipad',price:5555},{name:'mac',price:25000}]
function getNameByPrice(goods,price){//goods(商品数组) 和 price(筛选价格)
  return goods.reduce((arr,cur)=>{
    if(cur.price>price){
      arr.push(cur)
    }
    return arr
  },[]).map(function(item){
    return item.name
  })
}
console.table(getNameByPrice(cart,10000))

// 数组去重 
//思路 在数组中遍历查找元素 如果找到了 就加到新数组
// 正确的数组去重实现
let arr1 = [1,2,2,3,4,4,5];
let uniqueArr = arr1.reduce((pre, cur) => {
  if(!pre.includes(cur)) {  // 在累计数组pre中查找是否已存在当前元素
    pre.push(cur);         // 如果不存在就加入
  }
  return pre;              // 返回新的累计数组
}, []);                    // 初始值设为空数组

console.log(uniqueArr);    // [1,2,3,4,5]