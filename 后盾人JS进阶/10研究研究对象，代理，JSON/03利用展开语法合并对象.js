let uesr={name:'李四'}
let userOther={height:188,aeg:'18岁'}
let user={...uesr,...userOther}
console.log(user);

function updatefile(config) {
    let type = {
      type: "*.jpg,*.png",
      size: 10000,
    };
    type = { ...type, ...config };
    return type;
  }
  // 对象中同名参数后面的会覆盖前面的
  
  // {type: "*.png", size: 999}
  console.log(updatefile({ size: 999, type: "*.png" }));