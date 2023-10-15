const productContainer = document.querySelector(
  "#product-section > div > .product-container"
);
const productBadge = document.querySelector("#basket-btn-container .badge");
const basketBtn = document.querySelector("#basket-btn-container");

basketBtn.addEventListener("click", () => {
  window.open(
    `http://127.0.0.1:5500/dom/e-commerce/pages/basket/index.html`,
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
  const toggleBasketProductBtn = document.createElement("button");
  toggleBasketProductBtn.textContent = getIsInBasket(p.id)
    ? "Sebetden cixar"
    : "Sebete Elave Et";

  toggleBasketProductBtn.addEventListener("click", () => {
    toggleBasketItem(p.id, toggleBasketProductBtn);
  });

  const goDetailBtn = document.createElement("button");
  goDetailBtn.textContent = "Etrafli Melumat";
  productDiv.append(
    productImg,
    productName,
    productPrice,
    toggleBasketProductBtn,
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

function toggleBasketItem(productId, toggleBasketProductBtn) {
  const basketItems = getBasketItems();
  let idx = basketItems.findIndex((pId) => pId === productId);

  if (idx === -1) {
    basketItems.push(productId);
    toggleBasketProductBtn.textContent = "Sebetden cixar";
  } else {
    basketItems.splice(idx, 1);
    toggleBasketProductBtn.textContent = "Sebete Elave et";
  }

  fillBasketBadge(basketItems.length);
  localStorage.setItem("basket", JSON.stringify(basketItems));
}

function getBasketItems() {
  return JSON.parse(localStorage.getItem("basket")) ?? [];
}

function getIsInBasket(productId) {
  const basketItems = getBasketItems();
  return basketItems.some((id) => id == productId);
}

function fillBasketBadge(count) {
  productBadge.textContent = count;
}

fillBasketBadge(getBasketItems().length);
