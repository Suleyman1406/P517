// console.log(document.body);

console.log();
// document.body.children[0].style.color = "red";
// // document.body.children[1].style.fontSize = "200px";
// document.body.children[0].innerHTML = `
//   <span>
//     this is js content
//     <div>
//       <button>
//         Hello It is Me
//       </button>
//     </div>
//   </span>`;
// document.body.children[1].textContent = "<span> this is js content</span>";

// console.log(document.body.children);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(
//   document.body.firstElementChild.lastElementChild.lastElementChild
//     .parentElement.parentElement.parentElement.parentElement.parentElement
// );

// console.log(
//   document.body.firstElementChild.lastElementChild.previousElementSibling
//     .nextElementSibling.children[0].nextElementSibling
// );

// const myElementById = document.getElementById("hello");
// myElementById.style.fontWeight = 700;

// const myElementsByClassName = document.getElementsByClassName("test");

// // console.log(myElementsByClassName);
// Array.from(myElementsByClassName).map((el) => {
//   el.style.color = "blue";
// });

// const myElementsByTagName = document.getElementsByTagName("span");
// console.log(myElementsByTagName);

// const element = document.querySelector("#divId2 ~ asd");
// console.log(element);
// console.log(element?.nextElementSibling);

// const pElement = document.querySelector("p");

// pElement.textContent = "<button>Save</button>";
// pElement.outerHTML = "<button>Save</button>";

// const myNewBtnElement1 = document.createElement("button");
// myNewBtnElement1.innerHTML = "Save1";
// const myNewBtnElement2 = document.createElement("button");
// myNewBtnElement2.innerHTML = "Save2";

// document.body.append(myNewBtnElement1);
// document.body.prepend(myNewBtnElement2);
// document.body.prepend(myNewBtnElement);

// const myDivElement = document.querySelector("div");

// myDivElement.innerHTML = `
//   <button>Save1</button>
//   <button>Save2</button>
// `;

// myDivElement.append(myNewBtnElement1, myNewBtnElement2);

// const newBtnElement = document.createElement("button");
// newBtnElement.textContent = "Button 2";

// const thirdBtn = document.querySelector("button:last-child");

// thirdBtn.after(newBtnElement);

// const thirdBtn = document.querySelector("button:last-child");
// thirdBtn.remove();

const newBtnElement = document.createElement("button");
newBtnElement.textContent = "sen bir butonsan";

const myDivElement = document.querySelector("div");

myDivElement.append(newBtnElement);

myDivElement.removeChild(newBtnElement);

myDivElement.remove();

// document.body.remove();
