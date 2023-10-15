const favoriteItemContainer = document.getElementById("favorite-items");
const favoriteItemIds = JSON.parse(localStorage.getItem("favorite")) ?? []; // [1, 2, 5]

const favoriteItems = products.filter((p) => favoriteItemIds.includes(p.id)); //

favoriteItems.forEach((favoriteItem) => {
  const element = document.createElement("div");
  element.textContent = JSON.stringify(favoriteItem);
  favoriteItemContainer.append(element);
});
