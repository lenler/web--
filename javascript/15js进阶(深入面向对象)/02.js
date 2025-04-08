const readline = require('readline');

// 创建更安全的接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 添加错误处理和输入验证
function askNumber() {
  rl.question('请输入一个数字：', (input) => {
    const number = Number(input);
    
    if (isNaN(number)) {
      console.log('输入的不是有效数字，请重新输入！');
      askNumber(); // 重新提问
    } else {
      console.log(`你输入的数字是：${number}`);
      rl.close();
    }
  });
}

// 添加关闭事件监听
rl.on('close', () => {
  console.log('程序结束');
  process.exit(0);
});

// 开始提问
askNumber();