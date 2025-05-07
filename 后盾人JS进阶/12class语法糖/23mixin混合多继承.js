class Lesson{
    constructor(lesson){
        this.lesson=lesson;
    }
    get data(){//获取的是lesson数组
        return this.lesson;
    }
}
let Tool={
    max(key){
        return this.data.sort((a,b)=>b[key]-a[key])[0];//这里的[]是动态属性名
    }
}
const data=[
    {name:'js',price:100,click:188},
    {name:'html',price:200,click:288},
    {name:'css',price:300,click:388},
];
Object.assign(Lesson.prototype,Tool);//为lesson的原型上添加工具方法
let hd=new Lesson(data);
console.log(hd.max('click'));
