const productTableBody = document.querySelector("#product-table-body");
const spinnerElement = document.querySelector(".loading-spinner");
spinnerElement.style.display = "none";

function getData() {
  spinnerElement.style.display = "initial";
  fetch("https://northwind.vercel.app/api/products")
    .then((res) => res.json())
    .then((data) => {
      fillTable(data);
    })
    .finally(() => {
      spinnerElement.style.display = "none";
    });
}
getData();

function fillTable(data) {
  data.sort((a, b) => a.id - b.id);
  data.forEach((element) => {
    if (!element) return;
    const tableRow = document.createElement("tr");
    const tableIdData = document.createElement("td");
    tableIdData.textContent = element.id;
    const tableNameData = document.createElement("td");
    tableNameData.textContent = element.name;
    const tableSupplierCompanyNameData = document.createElement("td");
    tableSupplierCompanyNameData.textContent =
      element.supplier?.companyName ?? "Empty Field";
    const tableSupplierContactNameData = document.createElement("td");
    tableSupplierContactNameData.textContent =
      element.supplier?.contactName ?? "Empty Field";

    tableRow.append(
      tableIdData,
      tableNameData,
      tableSupplierCompanyNameData,
      tableSupplierContactNameData
    );
    productTableBody.append(tableRow);
  });
}
