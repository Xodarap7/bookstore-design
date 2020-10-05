const navbar = document.querySelector(".fixed-top-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    navbar.style.opacity = 1;
  } else {
    navbar.style.opacity = 0;
  }
});

const anchorLinks = document.querySelectorAll("#anchorLink");

for (const link of anchorLinks) {
  link.addEventListener("click", smoothScrollHandler);
}

function smoothScrollHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop - 60,
    behavior: "smooth",
  });
}
