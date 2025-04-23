let arr=[1,2,3,4,5,6,7,8,9,10];
function between(min,max){
    return function(val){
        return val>=min&&val<=max
    }
}

let newArr=arr.filter(between(3,9))
/*  function(val){
        return val>=min&&val<=max
    }  这是实际传入的函数  也就是很正常的方法*/
console.log(newArr);