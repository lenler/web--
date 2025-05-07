//课程管理类
const data = [
    { name: "js", price: 300 },
    { name: "vue.js", price: 212 },
    { name: "python", price: 98 },
  ]; 

class Lesson{
    model;
    constructor(data){
        this.model=data;
    }
    static createBatch(data){
        return data.map(item=>new Lesson(item))//批量创建
    }
     // 获取最贵的课程价格
  static maxPrice(data) {
    return data.sort((a, b) => b.price - a.price)[0];
  }
  get name(){
    return this.model.name
  }
  get price(){
    return this.model.price
  }
}
let lessons=Lesson.createBatch(data);
console.log(Lesson.maxPrice(lessons).name);
