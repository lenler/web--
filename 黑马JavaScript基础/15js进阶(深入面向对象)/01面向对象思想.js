// 创建一个"手机"对象
const phone = {
  // 属性
  brand: '华为',
  color: '黑色',
  
  // 方法
  call(number) {
    console.log(`正在拨打${number}`)
  },
  takePhoto() {
    console.log('咔嚓拍照')
  }
}

// 使用对象
phone.call('110')  // 输出：正在拨打110


/* 
万物皆对象
比如你要做游戏：

英雄是一个对象
怪物是一个对象
武器也是一个对象 每个对象都有自己的属性和能力
对象的特点：

属性：描述特征（比如英雄有名字、血量、等级）
方法：能做什么（比如英雄可以攻击、逃跑）
私有性：有些东西只能自己用（比如血量的具体计算方式）
继承就像遗传
你可以创建：

一个基础"动物"对象
然后让"狗"继承自动物，自动获得动物的所有能力
再给狗添加自己特有的能力（比如汪汪叫）
 */