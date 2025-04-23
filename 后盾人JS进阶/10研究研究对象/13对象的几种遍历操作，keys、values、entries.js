let user = {
    name: "lisi",
    age: 18,
    sex: "男",
    height: 188,
  };
  
  // Object.keys() 获取对象中的所有键名
  console.log(Object.keys(user)); // ["name", "age", "sex", "height"]
  
  // Object.values() 获取对象中所有的值
  console.log(Object.values(user)); // ["name", "age", "sex", "height"]
  
  // Object.entries() 获取队形的键名和值
  console.log(Object.entries(user));
  // [["name","lisi"],["age",18],["sex","男"],["height",188]]
  
  // for in 获取对象的值
  for (const key in user) {
    console.log(user[key]);
  }
  // for of 获取键和值
  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
  }