const API_BASE_URL = "https://northwind.vercel.app/api";
const LOCAL_STORAGE_BASKET_KEY = "basket";
const skeletonElements = document.querySelectorAll(".card.is-loading");
const cardsContainerElement = document.querySelector(".cards");

async function getProductsFromApi() {
  let data = null;
  try {
    showSkeleton(true);
    const res = await fetch(`${API_BASE_URL}/products`);
    data = await res.json();
  } catch (err) {
    console.error(err);
  } finally {
    showSkeleton(false);
  }

  return data;
}

function showSkeleton(show) {
  skeletonElements.forEach((element) => {
    element.style.display = show ? "initial" : "none";
  });
}

async function fillProductsToCards() {
  const products = await getProductsFromApi();
  if (products === null) return;
  sortProductArr(products);

  products.forEach((product) => {
    const productCard = createProductCard(product);
    cardsContainerElement.append(productCard);
  });
}

function createProductCard(product) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
   <div class="image">
      <img
        style="width: 100%"
        src="https://assets.codepen.io/43365/bulldog.jpeg"
      />
    </div>
    <div class="content">
    <h2>${product.id + " - " + product.name}</h2>
      <p>${product.quantityPerUnit}</p>
    </div>
    `;
  cardElement.addEventListener("click", () => {
    const navigateURL = `${window.location.origin}/dom/e-commerce-basket-with-api/pages/product-detail/index.html?id=${product.id}`;
    window.open(navigateURL, "_self");
  });
  const addToBasketBtn = document.createElement("button");
  addToBasketBtn.textContent = "Add to Basket";
  cardElement.append(addToBasketBtn);

  addToBasketBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addProductToBasket(product);
  });

  return cardElement;
}

function addProductToBasket(product) {
  const basketItems = getBasketItemsFromLocatStorage();
  const basketItem = getBasketItemInBasket(product.id, basketItems);

  if (basketItem) {
    updateQuantityOfProductInLocalStorage(basketItem, basketItems);
  } else {
    addProductToLocalStorage(product, basketItems);
  }
}

function updateQuantityOfProductInLocalStorage(basketItem, basketItems) {
  basketItem.count++;
  localStorage.setItem(LOCAL_STORAGE_BASKET_KEY, JSON.stringify(basketItems));
}

function addProductToLocalStorage(product, basketItems) {
  basketItems.push({
    product,
    count: 1,
  });
  localStorage.setItem(LOCAL_STORAGE_BASKET_KEY, JSON.stringify(basketItems));
}

function getBasketItemInBasket(productId, basketItems) {
  const basketItem = basketItems.find(
    (basketItem) => basketItem.product.id === productId
  );
  return basketItem;
}

function getBasketItemsFromLocatStorage() {
  const basketItems =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_BASKET_KEY)) ?? [];
  return basketItems;
}

function sortProductArr(products) {
  products.sort((productA, productB) => productA.id - productB.id);
}

fillProductsToCards();
