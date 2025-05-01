//不能添加属性 不能删除属性 不能修改属性的特性
let user = {
    name: "lisi",
    age: "18",
  };
  
  Object.seal(user);//半封闭 不能增删但是可以修改
  console.log(Object.getOwnPropertyDescriptors(user));
  user.name='李四'
  console.log(user);
  delete user.name
  console.log(user);
  
  Object.freeze(user)//封闭 不能增删改
  console.log(Object.getOwnPropertyDescriptors(user));
  user.name='李四'
  console.log(user);
  delete user.name
  console.log(user);