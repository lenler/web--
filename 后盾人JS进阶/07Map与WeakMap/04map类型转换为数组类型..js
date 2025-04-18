let hd=new Map([['中文','chinese'],['nihao','hello']])
console.log([...hd]);//将键值对转化为二维数组
console.log([...hd.keys()]);//单独转换键
console.log([...hd.entries()]);//将键值对转化为数组
console.log([...hd.values()]);//将值转化为数组
let newhd=[...hd].filter((item)=>{
  return item[1].includes('chinese')
})
console.log(newhd);


