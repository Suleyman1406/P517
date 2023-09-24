// let list = [3, 7, 9, 12, 14, [8, 9, 2]];

// list.forEach((val) => {
//   console.log(val + " hello");
// });

// let total = 0;

// list.forEach((val) => {
//   total += val;
// });

// console.log(total);

// list.forEach((val, asd) => {
//   console.log(val, asd);
// });

// function forEach(arr, callBackFn) {
//   for (let i = 0; i < arr.length; i++) {
//     callBackFn(arr[i], i, arr);
//   }
// }

// forEach(list, (a, b, c) => {
//   console.log(a, b, c);
// });

// let myArr = [4, 9, 17, 11, 22, 19];

// let res = myArr.forEach((val) => {
//   console.log(val);
// });

// console.log("res", res);

// myArr.forEach((value, idx, arr) => {
//   let isPrime = true;
//   for (let i = 2; i < value; i++) {
//     if (value % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   console.log(value, isPrime ? "Sade ededdir" : "Murekkeb ededdir");
// });

// let myArr = [1, 2, 3, 4, 55, 6, 71, 8];

// let res = myArr.map((val) => {
//   return val ** 2;
// });

// console.log(res);

// let myArr = ["isa", "suleyman", "ismayil", "leyla"];

// let res = myArr.map((val, idx, arr) => val.toUpperCase());

// console.log(res);
// console.log(myArr);

// let myArr = ["isa", "suleyman", "ismayil", "leyla"];

// let res = myArr.map((item) => {
//   item.toUpperCase();
// });

// console.log(res);

// let myArr = ["hello", "test", "helloMyTest", "isaM", "nese", "sulo", "asd"];

// let res = myArr.find((val) => {
//   return val === "nese1";
// });

// console.log(res);

// let myArr = [1, 7, 8, 0, 22, 33, 55];

// console.log(myArr.find(() => true));

// let res = myArr.find((val) => {
//   return val;
// });

// console.log(res);

// let myArr = [1, 8, 2, 9, 35, 88];

// let res = myArr.findIndex((val) => val == 89);

// if(res!==-1){
//   console.log("Isa ev tapsigirigini evinde ele.");
// }
// console.log(res);

// let myArr = [3, 5, 8, 12, 7, 55, 88];

// let res = myArr.map((val) => {
//   if (val % 2 == 0) {
//     return val;
//   }
// });

// console.log(res);

// let myArr = [3, 5, 8, 12, 7, 55, 88];

// let res = myArr.filter((val) => val % 2 == 1);

// console.log(res);

// let myArr = [3, 5, 8, 12, 7, 55, 88];

// let res = myArr.map((b, a, c) => a % 2 == 1);

// console.log(res);

// let myArr = [3, 5, 8, 12, 7, 55, 88];

// let res = myArr.filter((b, a, c) => a % 2 == 1);

// console.log(res);

// let myArr = [3, 5, 8, 12, 7, 55, 88,];

// let res = myArr.filter((va, b, c) => c.includes(va));

// console.log(res);

// let myArr = [3, 8, 12, 88, 99, -2];

// let res = myArr.every((val, idx, arr) => {
//   return val > 0;
// });
// // let res = myArr.every((val) => val > 0);

// console.log(res);
// let myArr = [3, 8, 12, 88, 99];

// let res = myArr.some((val, idx, arr) => val < 0);
// let res = myArr.every((val) => val > 0);

// console.log(res);
