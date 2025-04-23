let user = {
    name: "李四",
    height: 188,
    18: "18岁",
  };
  // 读
  console.log(user.name);
  // or
  console.log(user["name"]);
  // 中括号的读取
  console.log(user[18], "读取数字");
  
  // for in 遍历
  for (const key in user) {
    console.log(user[key]);
  }
  
  // 增  
  user.age = 18;
  user.getname = function() {
    return this.name;
  };
  console.log(user.getname());
  
  // 删
  delete user.name;