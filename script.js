const toggleBtnEl = document.querySelector(".toggle");
const navEl = document.querySelector(".nav");
const navListEl = document.querySelector(".nav-list");
const navItemsEl = document.querySelectorAll(".nav-item");

function switchMenu() {
  toggleBtnEl.classList.toggle("collapsed");
  navEl.classList.toggle("collapsed");
  navListEl.classList.toggle("collapsed");
}
toggleBtnEl.addEventListener("click", switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtnEl.classList.remove("collapsed");
    navEl.classList.remove("collapsed");
    navListEl.classList.remove("collapsed");
  }, 500);
}
navItemsEl.forEach((el) => el.addEventListener("click", closeMenu));
