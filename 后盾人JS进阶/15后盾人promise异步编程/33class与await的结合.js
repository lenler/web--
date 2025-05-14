class User{
    then(resolve,reject){
        resolve('fullfild')
    }
}
async function fn(){
    await new User()
    console.log(1);
}
fn()