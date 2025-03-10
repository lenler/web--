  //代码文字
  const chars = ['hello world', 'public class Main', 'let var', 'C#', 'C++', 'console.log', 'JavaScript', 'const', 'let','酷酷chat']
  //获取dom元素
  const container = document.body

  //思路 1.创建盒子元素 2.为盒子添加类名并修改css属性 3.为盒子添加随机文字内容 4.将盒子塞到body中 5.通过循环来复制盒子尽量占满屏幕
  function createCode() {
    //创建盒子元素
      const code = document.createElement('div')
    //为div添加类名
      code.className = 'code'
    //修改css属性
      code.style.cssText = `
          top: ${Math.random() * 100}vh;
          animation-duration: ${Math.random() * 10 + 5}s;
          font-size: ${Math.random() * 50 + 22}px;
          opacity: ${Math.random() * 0.5 + 0.3};
        `
    //为盒子添加文字
      code.textContent = chars[Math.floor(Math.random() * chars.length)]
      container.prepend(code)
    //将code插入到body中 作为第一个子元素
  }

  //反复调用30次
  for(let i=0;i<30;i++){
    createCode()    
  }

