let user = {
    name: "lisi",
    age: "18",
  };
  Object.preventExtensions(user);
  user.height = 180;
  console.log(user);//{name: 'lisi', age: '18'}