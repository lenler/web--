const hd='houdunren'
console.log(hd.indexOf('d'));//返回检索字符所在的位置 找不到的返回负一 从左边开始查找
console.log(hd.includes('h',8));//返回布尔类型 可以设置第二个参数从指定位置开始查找
console.log(hd.lastIndexOf('o'));//从最右边向左开始查找
console.log(hd.startsWith('h'));//判断字符串起始值 
console.log(hd.endsWith('h'));//判断字符串结束符

const word=['php','css']
const string='我喜欢在后盾人学习php和css'
const judge=word.some((word)=>{
  return string.includes(word)
})
if(judge){
  console.log(`1`);
}