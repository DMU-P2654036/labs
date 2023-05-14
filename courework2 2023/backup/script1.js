const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");

burgerBtn.addEventListener("click", function () {
  menu.classList.add("menu-open");
});
