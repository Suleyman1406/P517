let searcParams = new URLSearchParams(window.location.search);

let paramsProductId = searcParams.get("product_id");

let product = products.find((p) => paramsProductId == p.id);

// console.log(product);

if (!product) {
  window.open(
    "http://127.0.0.1:5500/dom/e-commerce/pages/not-found/index.html",
    "_self"
  );
}

const productImg = document.getElementById("product-img");
productImg.src = product.imgUrl;
const productName = document.getElementById("product-name");
productName.textContent = product.name;
const productPrice = document.getElementById("product-price");
productPrice.textContent = product.price;
