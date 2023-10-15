// let musicList = [];

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (musicList.length === 0) {
//       reject(new Error("Musiqi yoxdu!"));
//     } else {
//       resolve(musicList);
//     }
//   }, 5000);
// });

// setTimeout(() => {
//   musicList.push({
//     id: 12,
//     name: "Bagdagul",
//   });
// }, 3000);

// promise
//   .then((res) => {
//     console.log("resolve edildi", res);
//   })
//   .catch((err) => {
//     console.log("reject edildi", err);
//   })
//   .finally(() => {
//     console.log("promise sonlandi");
//   });

// console.log("bitti");

// async function print() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(12);
//     }, 3000);
//   });
//   let res = await promise;
//   console.log(res);
//   // return res;
// }

// print().then((result) => {
//   console.log(result);
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//   });

// fetch()

// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// }

// getData();
