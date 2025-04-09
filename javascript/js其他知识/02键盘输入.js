const readline = require('readline');

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const answer = await new Promise(resolve => {
    rl.question('请输入内容：', resolve);
  });
  
  console.log(`您输入的是：${answer}`);
  rl.close();
}

main().catch(console.error);
