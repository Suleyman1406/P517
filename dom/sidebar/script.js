const burgerBtn = document.querySelector("button");
const navigationItems = document.querySelector("#navigation-items");

burgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navigationItems.classList.add("navbar-open");
});
navigationItems.addEventListener("click", (e) => e.stopPropagation());

window.addEventListener("click", () => {
  if (navigationItems.classList.contains("navbar-open")) {
    navigationItems.classList.remove("navbar-open");
  }
});
