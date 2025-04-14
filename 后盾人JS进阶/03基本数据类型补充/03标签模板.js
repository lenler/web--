function tag(String,...vars){
  // vars 接收所有插值变量组成的数组
  console.log(vars);  // 输出: ["houdenren.com", "后盾人"]
  
  // String 接收模板字符串被插值分割后的部分
  console.log(String); // 输出: ["在线编程网", ",作者", ""]
}

let uname='后盾人'
let web ='houdenren.com'
tag`在线编程网${web},作者${uname}`
// 其实主要的作用是对标签中的变量或者字符进行二次处理