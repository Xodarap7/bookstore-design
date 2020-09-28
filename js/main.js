const navbar = document.querySelector(".fixed-top-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.opacity = 1;
  } else {
    navbar.style.opacity = 0;
  }
});
