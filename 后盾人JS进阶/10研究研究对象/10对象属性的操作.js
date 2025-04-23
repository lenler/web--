let user = {
    name: "lisi",
  };
  // 点名称增加
  user.age = 18;
  // 中括号增加 中括号可以是变量 如果不是变量就加引号 
  user["sex"] = "男";
  console.log(user);
  
  // 删除
  delete user.name;
  console.log(user);
  
  // 判断属性是否存在
  console.log(user.hasOwnProperty("sex")); // true
  console.log(user.hasOwnProperty("sdfsdfsdf")); // false