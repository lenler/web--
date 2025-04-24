let user = {
    set tonken(val) {
      // 写
      localStorage.setItem("tonken", val);
    },
    set removetonken(data) {
      // 删
      localStorage.removeItem(data);
    },
    get tonken() {
      // 读
      let tonken = localStorage.getItem("tonken");
      return tonken ? tonken : console.log("没有tonken");
    },
  };
  
  user.tonken = "保存的tonken";
  // user.removetonken = "tonken";
  console.log(user.tonken); // 保存的tonken