// let student = {
//   name: "suleyman",
//   surname: "dadashow",
//   age: 18,
//   isNew: true,
//   weight: 0.1,
//   parent: {
//     name: "hello",
//     surname: "asd",
//   },
//   calculate: function () {
//     console.log(this.surname);
//   },
// };

// student.calculate();

// let student = {
//   name: "suleyman",
//   for: "asd",
//   _: "asd",
//   "1asd": 99,
//   "asd-123": "asd",
// };

// // console.log(student.for);

// console.log(student["asd-123"]);

/*

  string name = "suleyman";
  Student s = new Student("asim");
  s.name
  name


*/

// let a = {
//   b: 15,
//   test: 12,
// };

// let b = "test";

// console.log(a["test"]);

// let propertyName = "vahid";

// let student = {
//   propertyName: "suleyman",
//   vahid: "Asd",
// };

// console.log(student.vahid);

// let student = {
//   a: 18,
// };

// student.a = 99;
// student.b = 77;

// delete student.a;

// console.log(student);

// let student = {
//   name: "Isa",
// };

// let name = "name";

// console.log(name in student);

// let student = {
//   name: "suleyman",
//   age: 12,
//   isNew: true,
// };

// for (let k in student) {
//   console.log(k, student[k]);
// }

// let student1 = {
//   name: "Isa",
// };
// let student2 = student1;

// student1.name = "Kamil";

// console.log(student2.name);

// let student = {
//   name: "suleyman",
//   surname: "dadashow",
//   age: 12,
//   isNew: true,
//   weight: 0.1,
//   // parent: {
//   //   name: "hello",
//   //   surname: "asd",
//   // },
// };

// console.log(
//   student.parent
//     ? student.age > 18
//       ? "Boyukdur"
//       : "kicikdir"
//     : "parent yoxdur"
// );

// console.log(student && student.parent && student.parent.name);

// console.log(student.age ?? "User yas bilgisi yoxdur");

// console.log(
//   student ? student.age ?? "user Yas bilgisi yoxdur" : "student bilgisi yoxdur"
// );

// console.log(student?.parent?.name);

// if (student && student.parent) {
//   console.log(student.parent.name);
// }

// let student = {
//   name: "suleuan",
//   srurname: "asdasd",
//   asd: 12,
// };

// console.log(Object.keys(student));
// console.log(Object.values(student));

// for (const asd of Object.values(student)) {
//   console.log(asd);
// }

// let students = [
//   {
//     name: "suleyman",
//     age: 12,
//   },
//   {
//     name: "isa",
//     age: 20,
//   },
//   {
//     name: "kamil",
//     age: 30,
//   },
//   {
//     name: "elmin",
//     age: 19,
//   },
//   {
//     name: "mehemmed",
//     age: 101,
//   },
// ];

// students.forEach((val, idx) =>
//   console.log(idx + " " + val.name + " " + val.age)
// );

// let res = students.every((val, idx) => idx + " " + val.name + " " + val.age);

// console.log(res);

// let res = students.filter((val) => {
//   return val.age < 20;
// });
// console.log(res);

// let a = [7, 2, 5, 1, 8, 4, 10, 100, 101, 12, 200, 20];

// a
//   .sort
//   // (val1, val2) => val1 - val2
//   // {
//   // if (val1 > val2) {
//   //   return 1;
//   // } else if (val1 < val2) {
//   //   return -1;
//   // }
//   // return 0;
//   // }
//   ();

// console.log(a);

// let names = ["b", "a", "c", "ca", "ac", "cb", "abc", "aac"];

// names.sort((a, b) => a.length - b.length);

// console.log(names);

// let students = [
//   {
//     name: "suleyman",
//     age: 12,
//   },
//   {
//     name: "isa",
//     age: 20,
//   },
//   {
//     name: "kamil",
//     age: 30,
//   },
//   {
//     name: "elmin",
//     age: 19,
//   },
//   {
//     name: "mehemmed",
//     age: 101,
//   },
// ];

// students.sort((st1, st2) => -st1.age + st2.age);

// console.log(students);

/* The line `let numbers = [1, 2, 4];` is declaring a variable `numbers` and assigning it an array
containing the numbers 1, 2, and 4. */
// let numbers = [1, 2, 4];

// let total = 0;

// numbers.forEach((val) => (total += val));
// console.log(total);

// let res = numbers.reduce((prev, value) => {
//   return prev + value;
// }, "");

// console.log(res);

// let students = [
//   {
//     name: "suleyman",
//     age: 1,
//   },
//   {
//     name: "isa",
//     age: 2,
//   },
//   {
//     name: "kamil",
//     age: 3,
//   },
//   {
//     name: "elmin",
//     age: 4,
//   },
//   {
//     name: "mehemmed",
//     age: 5,
//   },
// ];

// 3 9 12
// 3/3 + 9/3 + 12/3 = 1 + 3 + 4 =8
// prev => 0.2 + 0.4 = 0.6 + 0.6 = 1.2 + 0.8 = 2 + 1
// let res = students.reduce((prev, value, _, arr) => {
//   return prev + value.age / arr.length;
// }, 0);

// console.log(res);
