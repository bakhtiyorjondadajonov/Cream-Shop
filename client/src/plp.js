// -------- NAV BAR FUNTIONALITY ----------------//
const openWindowFn = (btn, menuName, closeBtn) => {
  btn.addEventListener("click", () => {
    popUp.classList.remove("hidden");
    menuName.classList.remove("hidden");
  });
  closeBtn.addEventListener("click", () => {
    popUp.classList.add("hidden");
    menuName.classList.add("hidden");
  });
};
const popUp = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".close");
const menuBtn = document.querySelector(".nav-bar--mobile-menu");
const cartBtn = document.querySelector(".nav-bar--mobile-cart");
const popUpMenu = document.querySelector(".nav-bar-menu--pop-up");
const popUpCart = document.querySelector(".nav-bar-cart--pop-up");
openWindowFn(menuBtn, popUpMenu, closeBtn);
openWindowFn(cartBtn, popUpCart, closeBtn);
