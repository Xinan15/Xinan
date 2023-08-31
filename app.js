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

// Smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.querySelector('a[href="#aboutme"]');
  const contactLink = document.querySelector('a[href="#contactme__form"]');
  const homeLink = document.querySelector('a[href="index.html"]');

  aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    const aboutSection = document.getElementById("aboutme");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    const contactSection = document.getElementById("contactme__form");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  // Smooth scroll to the top for the 'Home' link
  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
