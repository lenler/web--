/* let userinfo = [
    {
      name: "css",
      desc: "美化页面",
    },
    {
      name: "js",
      desc: "使页面动态化",
    },
    {
      name: "html",
      desc: "页面的核心部分",
    },
  ];

  let res=userinfo.reduce((obj,cur,index)=>{
    obj[`${cur['desc']}-${index}` ]=cur;
    return obj;
  },{})
  console.log(JSON.stringify(res,null,2));//json方法后面会讲 */

  // -------------------
  // Object.assign 示例
  let obj1 = { a: 1, b: 2 };
  let obj2 = { b: 3, c: 4 };
  let merged = Object.assign({}, obj1, obj2); // 合并对象，后面的会覆盖前面的
  console.log('Object.assign 合并:', merged);
  
  // 展开语法（...）实现对象合并
  let merged2 = { ...obj1, ...obj2 };
  console.log('展开语法合并:', merged2);
  
  // assign 还能实现浅拷贝
  let copy = Object.assign({}, obj1);
  console.log('Object.assign 浅拷贝:', copy);
  
  同样的展开语法也能实现浅拷贝
  let copy2 = {...obj1 };
  console.log('展开语法浅拷贝:', copy2);
  // 区别说明：
  // assign 和 ... 都是浅拷贝，属性冲突时后面的覆盖前面的
  // assign 可以合并多个对象，... 语法更简洁
  // assign 还能拷贝属性到已有对象，... 只能新建对象
  // 深拷贝要用 JSON 方法或第三方库
  
