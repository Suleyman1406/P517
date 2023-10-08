const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal-container .modal");
const openModalBtn = document.querySelector("button");

openModalBtn.addEventListener("click", () => {
  modalContainer.classList.add("modal-open");
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

modal.querySelector("button").addEventListener("click", () => {
  modalContainer.classList.remove("modal-open");
});

modalContainer.addEventListener("click", () => {
  modalContainer.classList.remove("modal-open");
});
