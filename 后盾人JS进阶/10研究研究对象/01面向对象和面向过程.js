// 面向过程更像是一种执行者，面向对象更像是指挥者。
// 举一个计算平均分的例子
/* let name='阿伟';
let grade=[{coursr:'js',score:70},{coursr:'php',score:80},{coursr:'java',score:90}]
function getAverage(grade,name){
    let total= grade.reduce((total,cur)=>{
        return total+cur.score
    },0)
    return `${name}的平均成绩是${total/grade.length}`
}
console.log(getAverage(grade,name)); */
//面向过程 直接写在全局里面会造成污染

let student={
    name:'阿伟',
    grade:[{coursr:'js',score:70},{coursr:'php',score:80},{coursr:'java',score:90}],
    averagr(grade,name){
        let total= grade.reduce((total,cur)=>{
            return total+cur.score
        },0)
        return `${name}的平均成绩是${total/grade.length}`
    }
}

console.log(student.averagr(student.grade,student.name));
