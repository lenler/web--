//   代理更像一个中介 对对象的操作进行保护
const obj={name:'后盾人'};
const proxy=new Proxy(obj,{
    get(obj,property){
        return obj.property;
    },
    set(obj,property,value){
        obj.property=value;
    }
});
proxy.name='后盾人';
console.log(proxy.name);
