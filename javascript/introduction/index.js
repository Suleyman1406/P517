// console.log("Hello Javascript");
/*
Comment
Comment
Comment
*/
// int a = 3;
// string b = "asd";

// let a = 3;
// a=false;
// a="strina";
// let b = "asd";
// let c = true;
// let d = 12.5;
// let e = "c";
// let f = 'Test';

// console.log(a);

// a= 12;
// console.log(a);

// let alma = "alma";
// let Alma = "alma";

// let a =12;
// let b = 13;

// if(a>b){
//   console.log('A boyukdur');
// }else if(a<b){
//   console.log('B boyukdur');
// }else{
//   console.log('beraberdir');
// }

// console.log('test');
// console.log(a);
// let command = "stasrt"
// switch(command){
//   case "start":
//     console.log('starting');
//     break;
//   case "stop":
//     console.log("stopping");
//     break;
//   case "wait":
//     console.log("waiting");
//     break;
//     default:
//       console.log("Selam");
// }

// for(let i = 0;i<=12;i++){
//   console.log(i);
// }
// let a = 12;
// while(a<90){
//   a++;
//   console.log(a);
// }

// let a= 12;
// do{
//   console.log(a);
//   a++;
// }while(a>15)

let from = 12;
let to = 25;
// j = 12 13
// value = 12 13
// isPrime = true false true
// i = 2
for (let j = from; j <= to; j++) {
  let value = j;
  let isPrime = true;
  for (let i = 2; i < value; i++) {
    if (value % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime == true) {
    console.log(value);
  }
}

// 13