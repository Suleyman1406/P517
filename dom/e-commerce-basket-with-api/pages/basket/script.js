const productContainerElement = document.querySelector(".product-container");

function getBasketItemsFromLocatStorage() {
  const basketItems = JSON.parse(localStorage.getItem("basket")) ?? [];
  return basketItems;
}

function fillBasketItemsToView() {
  const basketItems = getBasketItemsFromLocatStorage();

  if (basketItems.length === 0) {
    productContainerElement.innerHTML = "Basket Item Tapilmadi";
    return;
  }

  basketItems.forEach((item) => {
    createAndAppendBasketItemElement(item);
  });
}

function createAndAppendBasketItemElement(item) {
  const productElement = document.createElement("div");
  const productInfoElement = document.createElement("span");
  productElement.textContent = `${item.product.id} - ${item.product.name} `;
  productInfoElement.textContent = item.count;
  const increaseBtnElement = document.createElement("button");
  const decreaseBtnElement = document.createElement("button");
  increaseBtnElement.textContent = "+";
  decreaseBtnElement.textContent = "-";
  decreaseBtnElement.disabled = item.count === 1;
  productElement.append(
    decreaseBtnElement,
    productInfoElement,
    increaseBtnElement
  );

  increaseBtnElement.addEventListener("click", () => {
    increaseBasketItemCountInLocalStorage(item.product.id);
    productInfoElement.textContent = ++item.count;
    if (item.count === 2) {
      decreaseBtnElement.disabled = false;
    }
  });

  decreaseBtnElement.addEventListener("click", () => {
    decreaseBasketItemCountInLocalStorage(item.product.id);
    productInfoElement.textContent = --item.count;
    if (item.count === 1) {
      decreaseBtnElement.disabled = true;
    }
  });

  productContainerElement.append(productElement);
}

function increaseBasketItemCountInLocalStorage(productId) {
  const basketItems = getBasketItemsFromLocatStorage();
  const basketItem = basketItems.find((item) => item.product.id === productId);
  basketItem.count++;
  localStorage.setItem("basket", JSON.stringify(basketItems));
}

function decreaseBasketItemCountInLocalStorage(productId) {
  const basketItems = getBasketItemsFromLocatStorage();
  const basketItem = basketItems.find((item) => item.product.id === productId);
  basketItem.count--;
  localStorage.setItem("basket", JSON.stringify(basketItems));
}

function decreaseBasketItemCount() {}

fillBasketItemsToView();
