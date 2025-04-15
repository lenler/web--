let arr=[1,6,3,8,4,7]
arr=arr.sort(function(a,b){
  //默认a大于b 正就是从小到大 负就是从大到小
  return a-b
})
console.table(arr)

let cart=[{name:'iphone',price:12222},{name:'ipad',price:5555},{name:'mac',price:25000}]
cart=cart.sort(function(a,b){
  return a.price-b.price
})
console.table(cart);
