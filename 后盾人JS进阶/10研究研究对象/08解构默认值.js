function createelement(setting = {}) {
    // 解构里面的参数后面加上等号是默认值
    let { width = 200, height = 100, backgroundColor = "red" } = setting;
    const div = document.createElement("div");
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.backgroundColor = backgroundColor;
    document.body.appendChild(div);
  }