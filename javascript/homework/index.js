// B. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. Should work like that:
//   let schedule = {};
//   console.log( isEmpty(schedule) );  // true
//   schedule["8:30"] = "get up";
//   console.log( isEmpty(schedule) ); // false

// function isObjectEmpty(obj) {
//   return !Object.keys(obj).length;
// }

// console.log(isObjectEmpty({}));

// let salaries = { John: 100, Ann: 160, Pete: 130, Ali: 220 }; calculateSallary(sallaries) => 610

// let salaries = { John: 100, Ann: 160, Pete: 130 };
// calculateSallary(salaries);

function calculateSallary(obj) {
  // 1. variant
  // console.log(Object.values(obj).reduce((prev, val) => prev + val, 0));
  // 2. variant
  // let total = 0;
  // for (const val of Object.values(obj)) {
  //   total += val;
  // }
  // 3. variant
  // let total = 0;
  // for (const val in obj) {
  //   total += obj[val];
  // }
  // console.log(total);
}

// let login = "Director";
// let message =
//   login === "Employee"
//     ? "Hello"
//     : login === "Director"
//     ? "Greetings"
//     : login === ""
//     ? "No login"
//     : "";

// console.log(message);

/*

E. Write a function count(obj) that returns the number of properties in the object:
  let user = {
    name: 'John',
    age: 30
  };
  console.log( count(user) ); // 2

*/

// let user = {
//   name: "John",
//   age: 30,
// };
// console.log(count(user)); // 2
// function count(obj) {
//   return Object.keys(obj).length;
// }

// // F. You have an array of user objects, each one has user.name. Write the code that converts it into an array of names. For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];
// let names = users.map((user) => user.name);
// console.log(names); // John, Pete, Mary

// G. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// Example:
// console.log(convert('saLamNecesen')) -> SAlAMnECESEN

// function convert(str) {
//   let convertedStr = "";

//   for (let i = 0; i < str.length; i++) {
//     convertedStr +=
//       str[i] === str[i].toLowerCase()
//         ? str[i].toUpperCase()
//         : str[i].toLowerCase();
//   }

//   return convertedStr;
// }

// let res = convert("saLamNecesen");
// console.log(res);

// H. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.  (must use filter() function)
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]

// console.log(clear([0, 1, false, 2, undefined, "", 3, null, "asd", -2]));

// function clear(arr) {
//   return arr.filter((item) => item);
// }
