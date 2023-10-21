const searchParamsFromUrl = document.location.search;
const searchParam = new URLSearchParams(searchParamsFromUrl);
const productId = searchParam.get("id");
const API_BASE_URL = "https://northwind.vercel.app/api";
const pageLoadingElement = document.querySelector(".page-loading");
const productDetailContainerElement = document.querySelector(".product-detail");

if (!productId) {
  const navigateURL = `${window.location.origin}/dom/e-commerce-basket-with-api/pages/home/index.html`;
  window.open(navigateURL, "_self");
}

async function getProductFromApi(productId) {
  let data = null;
  try {
    showPageLoading(true);
    const res = await fetch(`${API_BASE_URL}/products/${productId}`);
    data = await res.json();
  } catch (err) {
    console.error(err);
  } finally {
    showPageLoading(false);
  }

  return data;
}

function showPageLoading(show) {
  pageLoadingElement.style.display = show ? "flex" : "none";
}

async function fillProductData() {
  const product = await getProductFromApi(productId);
  productDetailContainerElement.textContent = `${product.id} - ${product.name} - ${product.quantityPerUnit}`;
}

fillProductData();
