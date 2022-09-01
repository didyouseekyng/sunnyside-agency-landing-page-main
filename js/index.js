const menuBtn = document.querySelector(".hamburger");

const navMenu = document.querySelector(".header__nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
