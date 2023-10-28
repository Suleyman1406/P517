const tableBody = document.querySelector(".products-container");
const productForm = document.getElementById("product-form");
const formEditBtn = document.querySelector(".edit-btn");
const formCancelBtn = document.querySelector(".cancel-btn");

let editProductId = null;

function getDataFromApi() {
  fetch("https://northwind.vercel.app/api/products")
    .then((res) => res.json())
    .then((data) => {
      sortProducts(data, "id", "asc");
      fillTable(data);
    });
}

function sortProducts(products, propertyName, sortOrder = "asc") {
  products.sort((product1, product2) => {
    if (product1[propertyName] > product2[propertyName])
      return sortOrder === "asc" ? 1 : -1;
    return sortOrder === "asc" ? -1 : 1;
  });
}

function fillTable(data) {
  if (!data) return;
  tableBody.innerHTML = "";
  data.forEach((product) => addProductRow(product));
}

function addProductRow(product) {
  const tableRowElement = document.createElement("tr");
  const productIdDataElement = document.createElement("td");
  const productNameDataElement = document.createElement("td");
  const productUnitPriceDataElement = document.createElement("td");
  const productCategoryNameDataElement = document.createElement("td");
  const productOperationsDataElement = document.createElement("td");
  const productDeleteButtonElement = document.createElement("button");
  const productEditButtonElement = document.createElement("button");

  productIdDataElement.textContent = product.id;
  productNameDataElement.textContent = product.name ?? "-";
  productUnitPriceDataElement.textContent = product.unitPrice ?? "-";
  productCategoryNameDataElement.textContent = product.quantityPerUnit ?? "-";
  productEditButtonElement.textContent = "Edit";
  productDeleteButtonElement.textContent = "Delete";

  productDeleteButtonElement.addEventListener("click", () =>
    onProductDelete(product.id, tableRowElement)
  );

  productEditButtonElement.addEventListener("click", () =>
    onProductEdit(product)
  );

  productOperationsDataElement.append(
    productEditButtonElement,
    productDeleteButtonElement
  );
  tableRowElement.append(
    productIdDataElement,
    productNameDataElement,
    productUnitPriceDataElement,
    productCategoryNameDataElement,
    productOperationsDataElement
  );
  tableBody.append(tableRowElement);
}

async function onProductDelete(productId, productRowElement) {
  if (confirm(`Are you sure to delete product with id ${productId}`)) {
    closeEdit();
    const response = await fetch(
      `https://northwind.vercel.app/api/products/${productId}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      productRowElement.remove();
    }
  }
}

async function onProductEdit(product) {
  editProductId = product.id;
  productForm.classList.add("edit");
  productForm.children[0].value = product.name;
  productForm.children[2].value = product.unitPrice;
  productForm.children[4].value = product.quantityPerUnit;
}

getDataFromApi();

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateFormItems(e.target.children)) return;

  let isEditting = productForm.classList.contains("edit");
  const productData = {
    name: e.target.children[0].value,
    unitPrice: +e.target.children[2].value,
    quantityPerUnit: e.target.children[4].value,
  };

  if (isEditting) {
    let response = await fetch(
      `https://northwind.vercel.app/api/products/${editProductId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );
    if (response.status === 200) {
      let editProductRowElement = Array.from(tableBody.children).find(
        (rowElement) =>
          rowElement.firstElementChild.textContent == editProductId
      );
      editProductRowElement.children[1].textContent = productData.name;
      editProductRowElement.children[2].textContent = productData.unitPrice;
      editProductRowElement.children[3].textContent =
        productData.quantityPerUnit;
      closeEdit();
    } else {
      Toastify({
        text: "Error occured!",
        duration: 3000,
      }).showToast();
    }
  } else {
    const submitBtn = e.target.querySelector(".submit-btn");
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    const response = await fetch("https://northwind.vercel.app/api/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.status === 201) {
      // getDataFromApi();
      const data = await response.json();
      addProductRow(data);
    }

    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;
    resetFormInputs(e.target.children);
  }
});

formCancelBtn.addEventListener("click", closeEdit);

function closeEdit() {
  productForm.classList.remove("edit");
  editProductId = null;
  resetFormInputs();
}

function validateFormItems(formItems) {
  let hasError = false;
  let productNameInputElement = formItems[0];
  let productNameErrorElement = formItems[1];
  let productUnitPriceElement = formItems[2];
  let productUnitPriceErrorElement = formItems[3];
  let productCategoryNameElement = formItems[4];
  let productCategoryNameErrorElement = formItems[5];

  productNameErrorElement.textContent = "";
  productUnitPriceErrorElement.textContent = "";
  productCategoryNameErrorElement.textContent = "";

  if (!productNameInputElement.value) {
    productNameErrorElement.textContent = "Product name is required";
    hasError = true;
  }
  if (!productUnitPriceElement.value) {
    productUnitPriceErrorElement.textContent = "Product unit price is required";
    hasError = true;
  }
  if (Number.isNaN(+productUnitPriceElement.value)) {
    productUnitPriceErrorElement.textContent =
      "Product unit price must be number!";
    hasError = true;
  }
  if (!productCategoryNameElement.value) {
    productCategoryNameErrorElement.textContent =
      "Product category name is required";
    hasError = true;
  }

  return !hasError;
}

function resetFormInputs() {
  productForm.children[0].value = "";
  productForm.children[2].value = "";
  productForm.children[4].value = "";
}
