const toggler = document.querySelector(".toggle");
const ul = document.querySelector(".nav-items");
const x = document.querySelector(".tog");

toggler.addEventListener("click", navToggle);

x.addEventListener("click", navOff);
let showMenu = false;

function navToggle() {
  if (!showMenu) {
    toggler.classList.add("show");
    x.classList.add("show");

    ul.classList.add("show");
  } else {
    toggler.classList.remove("show");
    x.classList.remove("show");

    ul.classList.remove("show");
  }
}

function navOff() {
  toggler.classList.remove("show");
  x.classList.remove("show");

  ul.classList.remove("show");
}
