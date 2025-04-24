let data = [
    {
      name: "李四是一个非常好的人",
      desc: "简介简介简介简介",
    },
    {
      name: "王五是一个热爱生活，追求时尚的人",
      desc: "简介简介简介简介",
    },
    {
      name: "赵柳是一个很幽默，非常搞笑的人",
      desc: "简介简介简介简介",
    },
  ];
  
  // 声明代理
  const proxy_data = new Proxy(data, {
    // 第一个参数时数组本身，第二个参数时读取数组的下标
    get(arr, key) {
      // 数组的全部内容
      console.log(arr);
      // 读取数组的下标
      console.log(key);
      // 当前读取的数据
      console.log(arr[key]);
      // 当前数据里面的name
      const name = arr[key].name;
      // 设置长度限制
      const len = 5;
      arr[key].name =
        name.length > len ? name.substr(0, len) + ".".repeat(3) : name;
      // 返回加工后的数据
      return arr[key];
    },
  });
  console.log(JSON.stringify(proxy_data[1], null, 2));