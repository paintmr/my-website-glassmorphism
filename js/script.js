/**Page Loader */
window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
  // Page Loader
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  })
})


/** Toggle Navbar */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
})
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}


/** Active Section */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    // activate the overlay to prevent multiple clicks
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    const hash = e.target.hash;
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document.querySelector("section.active").classList.remove("active", "fade-out");
      document.querySelector(hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
})

/** Portfolio Item Details Popup */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");

  // If the src of img includes '.png', the status is from showing a portfolio project detail popup page to closing the detail page. Before closing the detail page, set the src to an empty String. Otherwise, when the Internet is slow, if you have checked the rosa detail and then close it, and then open the book detail, you will see the rosa's picture is still there. Only after a second or two will you see the rosa's picture be changed to the book's picture.
  if (document.querySelector(".pp-thumbnail img").src.includes(".png")) {
    document.querySelector(".pp-thumbnail img").src = '';
  }
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup)

// hide popup when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
})

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
  document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;

}

/** Reset Contact-Me Form after the user has clicked the 'Send Message' button. */
document.querySelector(".send-msg").addEventListener("click", resetContactMeForm);
const contactForm = document.querySelector("#contact-form");
function resetContactMeForm() {
  setTimeout(() => {
    contactForm.reset();
  }, 100);
}
