const elem = document.querySelector(".carousel-pdp");
console.log("elem: ", elem);
let flkty = new Flickity(elem, {
  autoPlay: true,
  cellAlign: "left",
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
});
