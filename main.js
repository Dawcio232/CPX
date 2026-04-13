const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
  });
}

// Close menu when clicking a link (mobile)
navMenu?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navMenu.classList.remove("active");
    hamburger?.classList.remove("open");
  }
});

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
