// Set Current Year
document.getElementById("date").textContent = new Date().getFullYear();

// Navbar Toggle
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");

navToggle.addEventListener("click", () => {
  const containerHeight = linksContainer.scrollHeight;
  linksContainer.style.height = linksContainer.style.height ? "0px" : `${containerHeight}px`;
});

// Smooth Scrolling
document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    const navHeight = document.querySelector("nav").offsetHeight;

    window.scrollTo({
      top: target.offsetTop - navHeight,
      behavior: "smooth",
    });

    linksContainer.style.height = "0px"; // Close the menu
  });
});

// Fixed Navbar on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("nav");
  const topLink = document.querySelector(".top-link");
  const scrollHeight = window.scrollY;
  const navHeight = navbar.offsetHeight;

  navbar.classList.toggle("fixed-nav", scrollHeight > navHeight);
  topLink.classList.toggle("show-link", scrollHeight > 500);
});
