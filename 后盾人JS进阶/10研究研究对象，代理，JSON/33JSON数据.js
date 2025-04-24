// JSON数据 以往使用xml进行数据传输，现在使用json进行数据传输
let obj = {
    name: "lisi",
    title: "序列化",
    toJSON: function() {
      return {
        newname: this.name,
      };
    },
  };
  // 第二个参数可以定义只返回那些数据，用数组包裹要返回的属性 null 是返回全部数据 
  console.log(JSON.stringify(obj, null, 2));//JSON是字符串不是对象