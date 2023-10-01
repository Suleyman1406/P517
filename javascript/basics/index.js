// One line comment

/*
  Multi line comment
*/

//#region test

//#endregion

// let a = 12;
// a= true;
// a="asd";

// let b = "Asd";
// let c = true;
// let d = 'a';
// let e = 12.12;

// console.log(a);

// var a = 12;
// a= true;
// a="asd";

// var b = "Asd";
// var c = true;
// var d = 'a';
// var e = 12.12;

// console.log(a);

// const PI_COUNT = 3.14;

// // PI = "Sdsad";

// console.log(PI);

// let a = 12;

// let a = "Elnur";

// console.log($customerName);

// let let = as;

// let myArr = [1, "asd", 2.3, true, "s", [2, 3, 4, "asd", [12, 55]]];

// console.log(myArr[5][4][0]);

// let myArr = [];

// myArr[0] = 12;
// myArr[3] = 12;

// console.log(myArr);

// let a = 12 + "12";
// console.log(a);

// console.log("biti");

// let a = 10 + "10" - "10";

// console.log(a);

// let a = "asdsd3";
// let c = `<div>Hello</div`;

// console.log(a, c);

// let age = 12;
// let name = "suleyman";

// console.log(`Hello ${name} age ${age}`);

// let a = true;
// let b = false;

// console.log(a);
// console.log(b);

// let a = null;

// console.log(a);

// console.log(typeof "asd");

// let a = String(1.2);
// console.log(a);
// console.log(typeof a);

// let a = Number(false);
// console.log(a);
// console.log(typeof a);

// let a = +"12";

// console.log(typeof a);

// let isNew = Boolean("\n");

// console.log(isNew);

// let a = 2;
// let b = 4;

// console.log(a ** b);

// let a = 3 + 1 + "42" + 1 + 2;

// console.log(a);

// let a = 12; // 12 13 14 15 16
// let b = a++ - ++a; // 12 - 14 // -2 -3 -4 -3
// let c = b-- - --b + ++a; // -2 - -4 + 15 // 17 18
// let d = ++c - ++a - b++; // 18 - 16 - -4 = 6
// console.log(a, b, c, d);

// Yusif 17 -4 16 3
// Kamil 16 -2 16 3
// Aynur 16 -4 18 6
// Mehemmed 14 -4 16 -1
// Ismayil 17 -4 15 3
// Isa 16 -3 11

// console.log(3 >= 3);

// console.log(2 != "3");

// console.log("asd" === "asd");

// console.log(1 != "1");

// console.log(1 !== "1");

// let a = 2;
// console.log((a = 1));

// // let a = 2;

// if (a == 1) {
//   console.log("birdi");
// } else {
//   console.log("deyil");
// }

// console.log();
/*
  And operatoru
  true && true => true
  false && true => false
  true && false => false
  false && false => false

  Or ||
  true || true  => true
  true || false => true
  false || true => true 
  false || false => false
*/

// console.log(true || false);

// console.log(true && false);

// console.log(1 && 2);
// console.log(0 && 1);
// console.log(1 || 2);
// console.log(undefined || 12);
// console.log(undefined && 12);

// console.log(12 && 0 && 18);

// console.log(undefined || null || 0 || 18);

// console.log((null || undefined) && (12 || 0));

// let a = 12;

// if (a > 18) {
//   console.log("boyukdur 18");
// } else if (a < 18) {
//   console.log("kicikdir");
// } else {
//   console.log("beraberdir");
// }

// let command = "start";

// switch (command) {
//   case "start":
//   case "stop":
//     console.log("stop");
//     break;
//   case "pause":
//     console.log("pause");
//     break;
//   default:
//     console.log("default");
//     break;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// let a = [1, 2, 3, 54, 99, "asd"];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// let numbers = [12, 3, 4, 2, 99, 245];

// for (let num of numbers) {
//   console.log(num);
// }

// let a = 12;

// while (a > 0) {
//   a--;
//   console.log(a);
// }

// let a = -1;
// do {
//   console.log(--a);
// } while (a > 0);

// function Sum(a = 12, b = 17) {
//   // console.log(a + b);
//   // return a + b;
//   // if (a > b) {
//   //   return true;
//   // } else if (b > a) {
//   //   return "asdasd";
//   // }
//   return a + b;
// }

// let res = Sum(19);

// console.log(res);

/*


B.
1. Bir integer return edən funksiya yaradın. Bu funksiya parametr olaraq integer array alır. 
2. Nəzərə alaq ki bu funksiyada hər elementdən 2 dəfə təkrarlanır. Sadəcə təkrarlanmayan bir element var. Funksiya bu elementi return eləməlidir.
Example:
    func([2, 2, 3, 5, 6, 9, 6, 5, 9]) => return 3
    func([1, 5, 7, 8, 7, 1, 5]) => return 8
    func([2, 0, 1, 2, 1]) return 0 
    */

// function findUnique(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//     if (count == 1) {
//       return nums[i];
//     }
//   }
//   return null;
// }

// console.log(findUnique([2, 2, 3, 5, 6, 9, 6, 5, 3, 3]));

// var a = 12;

// console.log(a);

// function swapNeighboors(nums) {
//   for (let i = 0; i < nums.length - 1; i += 2) {
//     let temp = nums[i];
//     nums[i] = nums[i + 1];
//     nums[i + 1] = temp;
//   }
//   return nums;
// }

// console.log(swapNeighboors([1, 2, 3, 4, 5, 6, 7, 8]));

// function isPalindrome(num) {
//   let stringNum = num + "";
//   let reversedNum = stringNum.split("").reverse().join("");
//   let intReversedNum = parseInt(reversedNum);
//   console.log(num === intReversedNum);
// }

// isPalindrome(121);

// function sumOf4MinAndMax(nums) {
//   if (nums.length < 5) {
//     console.log("Length must be at least 5!");
//     return;
//   }
//   let sortedNums = nums.sort((function (a, b) {
//     return a - b;
//   }));
//   let sumOfMinNums = 0;
//   for (let i = 0; i < 4; i++) {
//     sumOfMinNums += sortedNums[i];
//   }
//   console.log("Min:" + sumOfMinNums);
//   let sumOfMaxNums = 0;
//   for (let j = sortedNums.length - 1; j > sortedNums.length - 5; j--) {
//     sumOfMaxNums += sortedNums[j];
//   }
//   console.log("Max:" + sumOfMaxNums);
// }
// sumOf4MinAndMax([1, 2, 1, 3, 1, 45, 3]);

// function getHourMinSec(second) {
//   let hour = Math.floor(second / 3600);
//   let min = Math.floor((second - hour * 3600) / 60);
//   let sec = second - (hour * 3600 + min * 60);
//   console.log(hour + "h", min + "m", sec + "s");
// }
// getHourMinSec(7000);

// function sumOf4MinAndMax(arr) {
//   let myNewArr = [...arr].sort((a, b) => a - b);
//   console.log(myNewArr);

// let min = myNewArr.reduce(
//   (prev, val, idx) => (idx < 4 ? prev + val : prev),
//   0
// );
// let max = myNewArr.reduce(
//   (prev, val, idx, arr) => (idx > arr.length - 5 ? prev + val : prev),
//   0
// );
//   let min = myNewArr[0] + myNewArr[1] + myNewArr[2] + myNewArr[3];
//   let max =
//     myNewArr.at(-1) + myNewArr.at(-2) + myNewArr.at(-3) + myNewArr.at(-4);
//   console.log("min", min, "max", max);
// }

// let myArr = [1, 5, 2, 4, 8, 12, 3, -2];
// sumOf4MinAndMax(myArr);

// console.log("kohne ar", myArr);

// let arr = [3, 5, 9, 11];
// let res = arr.pop();
// console.log("res", res);
// console.log(arr);

// let myArr = [1, 2, 3, 4, 5];
// console.log(myArr.indexOf(20));

// let res = myArr.map((a) => a % 2 === 0);
// console.log(res);

// console.log(new Array(5, 9, 9, 2));

// let m
// 3 6 9
// 18 /3 = 6
// 3/3 + 6/3 + 9/3 = 6
// 0 + 8/4 + 12/4+  16/4 + 20/4 = 2 +3 + 4+ 5
// 0 + 8/4 = 2 prev
// (2+ 12)/4 == 3.5
// 2 + 12/4 = 5

let students = [
  {
    name: "Suleyman",
    age: 8,
  },
  {
    name: "Nigar",
    age: 12,
  },
  {
    name: "Kamil",
    age: 16,
  },
  {
    name: "Aqil",
    age: 20,
  },
];

console.log(
  students.filter(
    (st) =>
      st.age >
      students.reduce((prev, val, _, arr) => (prev + val.age) / arr.length, 0)
  )[1].name
);
