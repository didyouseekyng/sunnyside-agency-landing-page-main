const menuBtn = document.querySelectorAll(".hamburger");

const navLinks = document.querySelectorAll(".header__nav-links");

menuBtn[0].addEventListener("click", () => {
  navLinks[0].classList.toggle("active");
});
