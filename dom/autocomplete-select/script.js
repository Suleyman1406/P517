// out.addEventListener("click", (e) => {
//   console.log("out edildi");
// });
// middle.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("middle edildi");
// });
// inside.addEventListener("click", (e) => {
//   console.log("inside edildi");
// });
const dropdownSelect = document.querySelector(".dropdown-select");
const dropdownSelectInput = document.querySelector(".dropdown-select input");
const dropdownOpenIcon = document.querySelector(".dropdown-select img");
const dropdownClearIcon = document.querySelector(
  ".dropdown-select img:nth-child(2)"
);
const dropdownContainer = document.querySelector(".dropdown-container");
const dropdownMenu = document.querySelector(".dropdown-menu");

const options = [
  {
    value: "us",
    label: "United States of America",
  },
  {
    value: "tr",
    label: "Turkey",
  },
  {
    value: "geo",
    label: "Georgia",
  },
  {
    value: "kz",
    label: "Kazakhistan",
  },
  {
    value: "az",
    label: "Azerbaijan",
  },
];

fillMenuOptions(options);

function fillMenuOptions(filteredOptions) {
  dropdownMenu.innerHTML = "";
  if (filteredOptions.length === 0) {
    const messageElement = document.createElement("p");
    messageElement.textContent = "There is no option.";
    dropdownMenu.append(messageElement);
  }
  filteredOptions.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.textContent = option.label;
    optionElement.classList.add("option");
    dropdownMenu.append(optionElement);
    optionElement.addEventListener("click", (e) => {
      dropdownSelectInput.value = e.target.textContent;
      dropdownClearIcon.style.display = "initial";
    });
  });
}

dropdownSelect.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.add("open");
});

window.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("open")) {
    dropdownMenu.classList.remove("open");
  }
});

dropdownClearIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownSelectInput.value = "";
  dropdownClearIcon.style.display = "none";
  fillMenuOptions(options);
});

dropdownSelectInput.addEventListener("keyup", (e) => {
  fillMenuOptions(
    options.filter((option) =>
      option.label.toLowerCase().includes(e.target.value.toLowerCase())
    )
  );
});

dropdownSelectInput.addEventListener("blur", (e) => {
  if (!options.some((option) => option.value === e.target.value)) {
    e.target.value = "";
    fillMenuOptions(options);
  }
});
