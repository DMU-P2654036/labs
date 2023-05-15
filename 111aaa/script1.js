/* Burger menu JavaScript */
const menuBtn = document.querySelector(".menu-btn"); //reference to the .menu-btn class in html
const menu = document.querySelector(".menu"); //same
let menuOpen = false; //Boolean data type
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    //conditional function if menu not open do this:
    menuBtn.classList.add("open"); //add class
    menu.classList.add("open"); //same
    menuOpen = true; //now is open
  } else {
    //the inverse of the previous condition
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
    menuOpen = false;
  }
});
