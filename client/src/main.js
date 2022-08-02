const elem = document.querySelector(".main-carousel");
const brandCorusel = document.querySelector(".brand-carousel");
let flkty = new Flickity(elem, {
  autoPlay: true,
  cellAlign: "left",
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
});

let secondCorusel = new Flickity(brandCorusel, {
  cellAlign: "left",
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
});
