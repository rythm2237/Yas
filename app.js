// Set Current Year
document.getElementById("date").textContent = new Date().getFullYear();

// Navbar Toggle
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");

navToggle.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  linksContainer.style.height = containerHeight === 0 ? `${linksContainer.scrollHeight}px` : 0;
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = document.querySelector("nav").getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = document.querySelector("nav").classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position -= navHeight;
    }

    if (navHeight > 82) {
      position += containerHeight;
    }

    window.scrollTo({ left: 0, top: position, behavior: "smooth" });
    linksContainer.style.height = 0; // Close the menu
  });
});

// Fixed Navbar on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("nav");
  const topLink = document.querySelector(".top-link");
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  topLink.classList.toggle("show-link", scrollHeight > 500);
});
