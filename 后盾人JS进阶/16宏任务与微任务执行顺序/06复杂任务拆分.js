let count=0;
let Num=10000;
function hd(){
    for(let i=0;i<Num;i++){
        count += Num--;
        if(Num<0)break;
        console.log(count);
    }
    if(Num>0){
        setTimeout(hd,0)
    }
}
console.log('不影响主线程');
hd()
