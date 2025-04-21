function hd(){
    let n=0;
    this.sum=function(){
        console.log(++n);
    }
}
let a=new hd();
a.sum();
a.sum();
//但是多个对象见不会共享