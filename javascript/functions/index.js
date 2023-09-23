// hello();

// function hello() {
//   console.log("Hello");
// }

// let func = function () {
//   return 2 + 3;
// };

// // console.log(func());

// let func = (a, b, c) => {
//   return a + b + c;
// };

// let res = func(2, 3, 4);

// if (Number.isNaN(res)) {
//   console.log("hesablana bilmir");
// } else {
//   console.log(res);
// }

// function test1(a, b) {
//   return a + b;
// }

// /**
//  * The function "test2" takes two parameters, "a" and "b", and returns their sum.
//  * @param a - The first parameter of the function is `a`.
//  * @param b - The parameter "b" is a variable that represents the second value to be added in the
//  * function.
//  * @returns The sum of the values of `a` and `b` is being returned.
//  */
// let test2 = function (a, b) {
//   return a + b;
// };

// let test3 = (a, b) => {
//   return a + b;
// };

// test3(12);

// function Print(str, func) {
//   console.log(str);
//   func(9);
// }

// Print("asd", (val) => {
//   console.log(val + " hello");
// });

/**
 * The function `printWithFilter` takes an array of numbers and a filter function as parameters, and
 * prints out the numbers that pass the filter.
 * @param nums - [8, 2, 6, 12, 88]
 * @param filter - The filter parameter is a function that takes a value as an argument and returns a
 * boolean value. In this case, the filter function checks if the value is less than 19.
 */
// function printWithFilter(nums, filter) {
//   for (let i = 0; i < nums.length; i++) {
//     if (filter(nums[i])) {
//       console.log(nums[i]);
//     }
//   }
// }
// printWithFilter([8, 2, 6, 12, 88], (val) => val < 19);
// function biggerThanTen(val) {
//   return val > 10;
// }

// function isOdd(num) {
//   return num % 2 == 1;
// }

// function isEven(num) {
//   return num % 2 == 0;
// }

// console.log("Bigger than ten");
// printWithFilter([3, 8, 99, 1, 12, 19], biggerThanTen);
// console.log("Odds");
// printWithFilter([3, 8, 99, 1, 12, 19], isOdd);
// console.log("Evens");
// printWithFilter([3, 8, 99, 1, 12, 19], isEven);

// let numbers = [3, 7, 2, 8, 19, 88, 21, 13];

// console.log(numbers.filter((value) => value < 19));
