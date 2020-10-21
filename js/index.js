// Fixed Navbar
const navbar = document.querySelector(".nav-main-page");

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    navbar.style.opacity = 1;
  } else {
    navbar.style.opacity = 0;
  }
});

// Sidebar
const openSidebar = document.querySelector(".open-sidebar-button");
const closeSidebar = document.querySelector(".close-sidebar-button");
const sidebar = document.querySelector(".sidebar");

openSidebar.addEventListener("click", () => {
  sidebar.style.transform = "scaleY(1)";
});

closeSidebar.addEventListener("click", () => {
  sidebar.style.transform = "scaleY(0)";
});

// Scroll to id
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
