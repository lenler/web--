function Arr(...args){
    args.forEach((item,index)=>{
        this.push(item)
    })
    this.first=()=>{
        return this[0];
    }
    this.max=function(){
        return this.sort((a,b)=>b-a)[0]
    }
}
Arr.prototype=Object.create(Array.prototype);
let hd=new Arr(1,2,3);
console.log(hd.first());//1
console.log(hd.max());//3

class Arr2 extends Array{
    constructor(...args){
        super(...args)
    }
    first(){
        return this[0];
    }
    max(){
        return this.sort((a,b)=>b-a)[0]
    }
}
let hd2=new Arr2(1,2,3);
console.log(hd2.first());//1
console.log(hd2.max());//3