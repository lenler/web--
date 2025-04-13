// 标签(label)配合break使用的例子
outerLoop: 
for(let i = 0; i < 3; i++) {
  innerLoop:
  for(let j = 0; j < 3; j++) {
    console.log(`i=${i}, j=${j}`);
    if(i === 1 && j === 1) {
      break outerLoop; // 直接跳出外层循环
    }
  }
}

// 输出结果：
// i=0, j=0
// i=0, j=1
// i=0, j=2

// i=1, j=0
// i=1, j=1
