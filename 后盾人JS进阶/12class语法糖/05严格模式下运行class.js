"use strict";
function show() {
  // 非严格模式下指向window
  console.log(this); // undefined
}
show();

class user {
  name = "555";
  show() {
    function test() {
      console.log(this); // undefined
    }
    test();
  }
}
let u = new user();
// 不是严格模式下this也是undefined
u.show();
//所以类默认运行在严格模式下 