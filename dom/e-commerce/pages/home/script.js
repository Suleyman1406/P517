const productContainer = document.querySelector(
  "#product-section > div > .product-container"
);

products.forEach((p) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  const productImg = document.createElement("img");
  productImg.src = p.imgUrl;
  const productName = document.createElement("h3");
  productName.textContent = p.name;
  const productPrice = document.createElement("p");
  productPrice.textContent = p.price;
  const addToBasketBtn = document.createElement("button");
  addToBasketBtn.textContent = "Sebete Elave Et";
  const goDetailBtn = document.createElement("button");
  goDetailBtn.textContent = "Etrafli Melumat";
  productDiv.append(
    productImg,
    productName,
    productPrice,
    addToBasketBtn,
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
