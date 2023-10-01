const fruitInputElement = document.getElementById("fruit-input");
const addBtnElement = document.getElementById("add-btn");
const fruitListElement = document.getElementById("fruit-list");

addBtnElement.onclick = () => {
  const fruitInputValue = fruitInputElement.value.trim();

  if (!fruitInputValue) {
    alert("Bos olmamalidir");
    return;
  }
  const newLiElement = document.createElement("li");
  newLiElement.textContent = fruitInputValue;

  const deleteBtnElement = document.createElement("button");
  deleteBtnElement.textContent = "X";

  deleteBtnElement.onclick = () => {
    if (confirm("Are you sure to delete?")) {
      newLiElement.remove();
    }
  };

  newLiElement.append(deleteBtnElement);
  fruitListElement.append(newLiElement);
  fruitInputElement.value = "";
};
