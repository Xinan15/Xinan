// Navbar toggle code (remains the same)
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Initialize EmailJS
emailjs.init("nceDrwlcTso4jndD5");

// Add event listener to form
window.onload = function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Remove previous status classes if any
    status.classList.remove("success", "error");

    // Service ID and Template ID from EmailJS
    const SERVICE_ID = "service_3fmhs9i";
    const TEMPLATE_ID = "template_ual8bpc";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form).then(
      function () {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks! I'll get back to you as soon as possible";
      },
      function (error) {
        status.classList.add("error");
        status.innerHTML = "Oops! There was an error.";
      }
    );
  });
};

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle scrolling to a specific section
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }

  // Check for query parameters on page load
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get("section");
  if (section) {
    scrollToSection(section);
  }

  // For Home link
  const homeLink = document.querySelector('.navbar__item a[href="index.html"]');
  homeLink.addEventListener("click", function (event) {
    if (
      window.location.pathname === "/index.html" ||
      window.location.pathname === "/"
    ) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  // For About and Contact sections
  const aboutLink = document.querySelector('.navbar__item a[href="#aboutme"]');
  const contactLink = document.querySelector(
    '.navbar__item a[href="#contactme__form"]'
  );

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (
      window.location.pathname !== "/index.html" &&
      window.location.pathname !== "/"
    ) {
      window.location.href = "/index.html?section=aboutme";
    } else {
      scrollToSection("aboutme");
    }
  });

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (
      window.location.pathname !== "/index.html" &&
      window.location.pathname !== "/"
    ) {
      window.location.href = "/index.html?section=contactme__form";
    } else {
      scrollToSection("contactme__form");
    }
  });
});
