// for(let i=0;i<10;i++){
//   for(let j=0;j<i;j++){
//     process.stdout.write('')
//   }
//   process.stdout.write('\n')
// }

for(let i=0;i<10;i++){
  for(let j=10-i;j>0;j--){
    process.stdout.write(' ')
  }

  for(let j=i*2-1;j>0;j--){
    process.stdout.write('*')
  }

  process.stdout.write('\n')

}