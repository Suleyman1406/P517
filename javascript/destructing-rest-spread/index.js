// let a = [6, 8, 12, 89];
// let b = a[0];
// let c = a[1];
// let d = a[2];

// let [b, c, d, e] = [1, 1, 1, 1];

// console.log("b", b);
// console.log("c", c);
// console.log("d", d);
// console.log("e", e);

// let a = 12;
// let b = 16;
// let c = 19;

// [a, b, c] = [c, b, a];

// console.log(a, b, c);

// let [a, c, b] = [78, 19, 8];
// console.log(a);
// console.log(b);

// let [a, ...b] = [7, 8, 9, 11, 15];
// console.log(a);
// console.log(b);

// function sum(a, as, ad, ...numbers) {
//   console.log(numbers.reduce((prev, val) => prev + val, 0));
// }

// sum(2, 3, 9);
// let student = { name: "suleyman", surname: "Dadashow", age: 12 };
// let age = student.age;

// let { age, name, test } = { name: "suleyman", surname: "Dadashow", age: 12 };

// console.log(age);
// console.log(name);
// console.log(test);

// let name = "Website Title";

// let data = {
//   name: "suleyman",
//   surname: "dadashov",
//   age: 12,
//   /*
//   .
//   .
//   .
//   */
// };

// let { name: userName, surname } = data;

// console.log(userName);
// console.log(surname);

// let { color, isNew: isProductNew } = { color: "red", price: 18, isNew: false };

// console.log(color);
// console.log(isProductNew);

// let { color, ...remainingObj } = { color: "red", price: 18, isNew: false };

// console.log(color);
// console.log(remainingObj);

// let { computerInfo } = {
//   name: "suleyman",
//   surname: "dadashow",
//   computerInfo: {
//     name: "mac",
//     processor: "m1",
//   },
// };

// let numbers = [3, 5, 8];

// let nums = [6, 8, ...numbers, 9];

// console.log(nums);

// function sum(a, b) {
//   console.log(a + b);
// }

// let nums = [3, 5, 11];

// sum(...nums);

// console.log(Math.max(3, 5, 9, 11, 2, 1, 77));

// let person = { name: "suleuman", surname: "dadashow" };
// let student = {
//   // person: person,
//   // person,
//   // a,
//   ...person,
//   grade: 88,
// };
// console.log(student);
