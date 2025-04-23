let student={
    uname:"张三",
    aeg:'18',
    lesson:{
        lesson1:"语文",
        lesson2:"数学",
    }
}
let {uname:name,lesson:{lesson1,lesson2}}=student;
console.log(name,lesson1,lesson2);//张三 语文 数学
let {lesson}=student;
console.log(lesson);//{ lesson1: '语文', lesson2: '数学' }

