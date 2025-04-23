function getuserinfo(name, { sex, age }) {
    // 利用解构语法，同名直接取值
    console.log(name); // lisi
    console.log(sex); // men
    console.log(age); // 18
  }
  getuserinfo("lisi", { sex: "men", age: 18 });