// ********** Set the Current Year in Footer **********
document.getElementById("date").innerHTML = new Date().getFullYear();

// ********** Navbar Toggle and Outside Click **********
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const linksContainer = document.querySelector(".links-container");

  // Toggle Navbar Menu
  navToggle.addEventListener("click", () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    linksContainer.style.height = containerHeight === 0 ? `${linksContainer.scrollHeight}px` : 0;
  });

  // Close Menu on Outside Click
  document.addEventListener("click", (e) => {
    if (!e.target.closest("header")) {
      linksContainer.style.height = 0;
    }
  });
});

// ********** Fixed Navbar and Back-to-Top Link **********
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("nav");
  const topLink = document.querySelector(".top-link");
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  // Fix Navbar
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // Show Back
