/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== Add Blur To Header ===============*/

const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactFrom = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactEmailSubject = document.getElementById("contact-email-subject"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === "" ||
    contactEmailSubject.value === ""
  ) {
    //add and remove color
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Write all the input fields 📩";

    // setTimeout(() => {
    //     contactMessage.textContent = "";
    //   }, 5000);
  } else {
    //serviceID - templateID - #from - publicKey
    emailjs
      .sendForm(
        "service_9iwtae5",
        "template_dp6k7bf",
        "#contact-form",
        "wGNUHCwYAUoudsAMs"
      )
      .then(
        () => {
          // Show message and add color
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "Message sent ✅"; //✔️

          // Remove message after five seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 4000);
        },
        (error) => {
          alert("OOPS!  SOMETHING HAS FAILED...! ", error);
        }
      );

    //to clear the input field
    setTimeout(() => {
      contactName.value = "";
      contactEmail.value = "";
      contactEmailSubject.value = "";
      contactProject.value = "";
    }, 3500);
  }
};
contactFrom.addEventListener("submit", sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/

ScrollReveal({
  // reset: true,
  distance: "100px",
  duration: 2700,
  delay: 400,
});

ScrollReveal().reveal(".home-content", { origin: "top" });
ScrollReveal().reveal(
  ".home__image, .services-container, .portfolio-box, .contact form, .qualification__container, .contact__titles, .contact__title, .section__subtitle, .skills_main",
  { origin: "bottom" }
);

ScrollReveal().reveal(".home-content h1, .about__image, .contact__info", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*=============== Type Js ===============*/

const typed = new Typed(".multiple-text", {
  strings: [
    "CyberSecurity Engineer",
    "Software Engineer",
    "Backend Developer",
    "Blogger",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
