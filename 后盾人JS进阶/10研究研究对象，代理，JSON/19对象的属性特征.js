let user = {
    name: "lisi",
    age: "18",
  };
  
//   Object.getOwnPropertyDescriptor(obj,key)可以读取对象里面某个值得属性
  // 读取到的结果
  /*
    {
        value: "lisi"        属性值
        writable: true       是否可写
        enumerable: true     是否可以被遍历           
        configurable: true   是否可以被删除获取重新被配置
    }
          */
  // 读取对象的单个值属性
  console.log(Object.getOwnPropertyDescriptor(user, "name"));
  
//   读取队形里面所有值得属性
  console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user), null, 2));