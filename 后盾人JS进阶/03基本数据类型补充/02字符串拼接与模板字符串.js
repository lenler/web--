let obj=[{title:'1'},{title:'2'},{title:'3'}]
function title(){
  return `${obj.map((item)=>{
    return `<li>`+item.title+`</li>`
  }).join()}`
}

function title2(){
  return `${obj.map((item)=>{
    return `<li>${item.title}</li>`
  }).join('')}`
}oi
// 两种写法
console.log(title2());
