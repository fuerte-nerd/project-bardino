const nav = document.querySelector(".navbar");
const navBrand = document.querySelector(".navbar-brand");
const collapseMenu = document.querySelector(".navbar-nav");
const toggler = document.querySelector(".navbar-toggler");
const togglerIcon = document.querySelector(".navbar-toggler-icon")
const navLogo = document.querySelector(".navbar-brand img");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavClasses = ["p-4"];
const navClasses = {
  zero: ["bg-transparent", "navbar-dark"],
  over_zero: ["bg-white", "navbar-light", "shadow", "py-1"]
};
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("mouseover", e => {
    card.classList.add("shadow-lg");
  });
  card.addEventListener("mouseout", () => {
    card.classList.remove("shadow-lg");
  });
}

window.onscroll = () => {
  checkChanges();
};

const checkChanges = () => {
 

  if (window.scrollY > 0) {
    nav.classList.add(...navClasses.over_zero);
    nav.classList.remove(...navClasses.zero);
    navBrand.classList.add("nav-shrink", "p-0");
    navBrand.classList.remove("pt-2");
    collapseMenu.classList.remove("bg-dark");
    collapseMenu.classList.add("text-dark", "text-light", "small");
    navLogo.classList.add("nav-shrink")
    togglerIcon.classList.remove("navbar-toggler-icon-zero")
    for(let link of navLinks){
      link.classList.add("nav-link-non-zero")
    }
  } else {
    nav.classList.remove(...navClasses.over_zero);
    nav.classList.add(...navClasses.zero);
    navBrand.classList.remove("nav-shrink", "p-0");
    navBrand.classList.add("pt-2");
    collapseMenu.classList.add("bg-dark");
    collapseMenu.classList.remove("text-dark", "text-light");
    navLogo.classList.remove("nav-shrink")
    togglerIcon.classList.add("navbar-toggler-icon-zero")
    for(let link of navLinks){
      link.classList.remove("nav-link-non-zero")
    }
  }
  if (window.innerWidth < 992 && window.scrollY > 0) {
    collapseMenu.classList.remove("bg-dark", "p-4");
  } else {
    collapseMenu.classList.add("bg-dark", "p-4");
  }
  if (window.innerWidth < 992 && window.scrollY === 0) {
    collapseMenu.classList.add("bg-dark");
  } else {
    collapseMenu.classList.remove("bg-dark");
  }
  if (window.innerWidth > 992) {
    collapseMenu.classList.remove("p-4");
  } else {
    collapseMenu.classList.add("p-4");
  }
};

window.onload = () => {
  window.addEventListener("resize", () => {
    checkChanges();
  });
  checkChanges();

  $(document.body).on('shown.bs.modal, hidden.bs.modal', function () {
    $('body').css('padding-right','0');
    $('nav').css('padding-right', '0.5rem')
});
};
