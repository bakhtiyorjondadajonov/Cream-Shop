const elem = document.querySelector(".main-carousel");
const brandCorusel = document.querySelector(".brand-carousel");
const collectionsCarousel = document.querySelector(".collections-carousel");

export const carouselTriggerFn = (element) => {
  if (element) {
    let flkty = new Flickity(element, {
      autoPlay: true,
      cellAlign: "left",
      contain: true,
      freeScroll: true,
      prevNextButtons: false,
      pageDots: false,
    });
  }
};
carouselTriggerFn(elem);
carouselTriggerFn(collectionsCarousel);
carouselTriggerFn(brandCorusel);

// -------- NAV BAR FUNTIONALITY ----------------//

const popUp = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".close");
const menuBtn = document.querySelector(".nav-bar--mobile-menu");
const cartBtn = document.querySelector(".nav-bar--mobile-cart");
const popUpMenu = document.querySelector(".nav-bar-menu--pop-up");
const popUpCart = document.querySelector(".nav-bar-cart--pop-up");

export const openWindowFn = (btn, menuName, closeBtn) => {
  btn.addEventListener("click", () => {
    popUp.classList.remove("hidden");
    menuName.classList.remove("hidden");
  });
  closeBtn.addEventListener("click", () => {
    popUp.classList.add("hidden");
    menuName.classList.add("hidden");
  });
};
openWindowFn(menuBtn, popUpMenu, closeBtn);
openWindowFn(cartBtn, popUpCart, closeBtn);
