let set=new Set([1,2,3,4,5,6])
set.forEach(function(value,index,set){//使用forEach遍历set
  console.log(value);
})

for (const value of set) {//使用forof遍历set
  console.log(value);
}