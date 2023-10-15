const basketItemContainer = document.getElementById("basket-items");
const basketItemIds = JSON.parse(localStorage.getItem("basket")) ?? []; // [1, 2, 5]

const basketItems = products.filter((p) => basketItemIds.includes(p.id)); //

basketItems.forEach((basketItem) => {
  const element = document.createElement("div");
  element.textContent = JSON.stringify(basketItem);
  basketItemContainer.append(element);
});
