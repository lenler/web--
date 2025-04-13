let a=0;
let b=1
if(a||b){
  console.log('nihao');
}

let f=a||b;
console.log(f);


function star(num){
  return '*'.repeat(num||1)//repaat(重复次数)
}
console.log(star(123));

