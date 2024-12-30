let loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});

let header = document.querySelector(".header");
let bntUp = document.querySelector(".btn-up");
let bntDown = document.querySelector(".btn-down");
let progres = document.querySelector("#progres");
let projecto = document.querySelectorAll(".projecto");

let calscrol = () => {
  /* BTN SCROL Y BARRA DE CALCUL DE SCROLL  */
  let pos = document.documentElement.scrollTop;
  let calAlturaScrol =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolValue = Math.round((pos * 100) / calAlturaScrol);

  if (pos > 100) {
    header.classList.add("scroll");
    bntUp.classList.add("active");
    bntDown.classList.remove("active");
  } else {
    header.classList.remove("scroll");
    bntUp.classList.remove("active");
    bntDown.classList.add("active");
  }

  bntUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  bntDown.addEventListener("click", () => {
    window.scrollTo(0, 5500);
  });
  progres.style.background = `linear-gradient(#009dd5ff ${scrolValue}%, #d7d7d7 ${scrolValue}%)`;
  /* FIN     BTN SCROL Y BARRA DE CALCUL DE SCROLL  */

  /* PROJECTOS ANIMACION SCROLL */
  projecto.forEach((projecto) => {
    let windowHeight = window.innerHeight;
    let getRecTOP = projecto.getBoundingClientRect().top;

    if (getRecTOP > windowHeight) {
      projecto.classList.add("active");
    } else {
      projecto.classList.remove("active");
    }
  });
};

window.onscroll = calscrol;
window.onload = calscrol;

/*document.addEventListener("DOMContentLoaded", function () {
 let projecto = document.querySelectorAll(".projecto");
  const observerOptions = {
    threshold: 0.1,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});*/
