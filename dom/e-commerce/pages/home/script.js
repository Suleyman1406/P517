const productContainer = document.querySelector(
  "#product-section > div > .product-container"
);
const productBadge = document.querySelector("#favorite-btn-container .badge");
const favoriteBtn = document.querySelector("#favorite-btn-container");

favoriteBtn.addEventListener("click", () => {
  window.open(
    `http://127.0.0.1:5500/dom/e-commerce/pages/favorite/index.html`,
    "_self"
  );
});

products.forEach((p) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  const productImg = document.createElement("img");
  productImg.src = p.imgUrl;
  const productName = document.createElement("h3");
  productName.textContent = p.name;
  const productPrice = document.createElement("p");
  productPrice.textContent = p.price;
  const togglefavoriteProductBtn = document.createElement("button");
  togglefavoriteProductBtn.textContent = getIsInfavorite(p.id)
    ? "Sebetden cixar"
    : "Sebete Elave Et";

  togglefavoriteProductBtn.addEventListener("click", () => {
    togglefavoriteItem(p.id, togglefavoriteProductBtn);
  });

  const goDetailBtn = document.createElement("button");
  goDetailBtn.textContent = "Etrafli Melumat";
  productDiv.append(
    productImg,
    productName,
    productPrice,
    togglefavoriteProductBtn,
    goDetailBtn
  );
  goDetailBtn.addEventListener("click", () => {
    window.open(
      `http://127.0.0.1:5500/dom/e-commerce/pages/product-detail/index.html?product_id=${p.id}`,
      "_self"
    );
  });
  productContainer.append(productDiv);
});

function togglefavoriteItem(productId, togglefavoriteProductBtn) {
  const favoriteItems = getfavoriteItems();
  let idx = favoriteItems.findIndex((pId) => pId === productId);

  if (idx === -1) {
    favoriteItems.push(productId);
    togglefavoriteProductBtn.textContent = "Sebetden cixar";
  } else {
    favoriteItems.splice(idx, 1);
    togglefavoriteProductBtn.textContent = "Sebete Elave et";
  }

  fillfavoriteBadge(favoriteItems.length);
  localStorage.setItem("favorite", JSON.stringify(favoriteItems));
}

function getfavoriteItems() {
  return JSON.parse(localStorage.getItem("favorite")) ?? [];
}

function getIsInfavorite(productId) {
  const favoriteItems = getfavoriteItems();
  return favoriteItems.some((id) => id == productId);
}

function fillfavoriteBadge(count) {
  productBadge.textContent = count;
}

fillfavoriteBadge(getfavoriteItems().length);
