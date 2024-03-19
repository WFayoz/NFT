const hamburger = document.querySelector(".navigation__humburger");
const navItems = document.querySelector(".navigation__items");

hamburger.addEventListener("click", (event) => {
  event.preventDefault();
  navItems.classList.toggle("active");
});
