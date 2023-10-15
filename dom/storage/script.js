// const date = new Date(Date.now() + 30 * 1000);

// document.cookie = `surname=Suleyman; expires=${date.toUTCString()}`;

// console.log(document.cookie);

// localStorage.setItem("name", "suleyman");

// console.log(localStorage.getItem("name"));

// const productList = document.querySelector("#product-list");
// const favoriteList = document.querySelector("#favorite-list");

// let products = [
//   {
//     id: 1,
//     name: "Sabun",
//   },
//   {
//     id: 2,
//     name: "XLor",
//   },
//   {
//     id: 3,
//     name: "Domestor",
//   },
//   {
//     id: 4,
//     name: "Vanish",
//   },
// ];

// products.forEach((product) => {
//   const element = document.createElement("li");
//   const favoriteBtn = document.createElement("button");
//   favoriteBtn.textContent = "<3";
//   favoriteBtn.style.transform = "rotate(270deg)";
//   element.textContent = product.name;
//   element.id = `product-${product.id}`;
//   element.append(favoriteBtn);
//   element.style.marginBottom = "30px";
//   productList.append(element);
// });

// Array.from(productList.children).forEach((li) => {
//   li.lastElementChild.addEventListener("click", () => {
//     const element = document.createElement("li");
//     const product = products.find((p) => p.id == li.id.split("-")[1]);
//     element.textContent = product.name;
//     favoriteList.append(element);
//     const favoriteProducts = localStorage.getItem("favorites");

//     console.log(favoriteProducts);

//     localStorage.setItem("favorites", JSON.stringify([product.id]));
//   });
// });

// const loginBtn = document.querySelector("button");
// const result = document.querySelector("p");
// const logoutBtn = document.querySelectorAll("button")[1];

// const user = {
//   name: "Suleyman",
//   surname: "Dadashov",
// };

// loginBtn.addEventListener("click", () => {
//   result.textContent = `name: ${user.name}, surname: ${user.surname}`;
//   localStorage.setItem("user", JSON.stringify(user));
// });
// logoutBtn.addEventListener("click", () => {
//   result.textContent = "Null";
//   localStorage.removeItem("user");
// });

// const localUser = JSON.parse(localStorage.getItem("user"));

// if (localUser) {
//   result.textContent = `name: ${localUser.name}, surname: ${localUser.surname}`;
// }
