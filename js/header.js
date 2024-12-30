
import "./main.js";
import "./clima.js";

document
  .querySelector(".button i.ril-listril")
  .addEventListener("click", () => {
    document.querySelector(".navigacion").classList.toggle("active");
  });

//cerrar y abrir bonton optiones
document
  .querySelector(".btn-opcion i.ril-cog1ril")
  .addEventListener("click", () => {
    document.querySelector(".opciones").classList.add("active");
  });
document
  .querySelector(".btn-opcion i.ril-cancel1ril")
  .addEventListener("click", () => {
    document.querySelector(".opciones").classList.remove("active");
  });

document.querySelector(".opciones p").addEventListener("click", () => {
  document.body.classList.toggle("night");
  document.querySelector(".opciones p i.ril-sunril").classList.toggle("active");

  // guardar el modo en localStorage

  if (document.body.classList.contains("night")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// usar
if (localStorage.getItem("dark-mode") == "true") {
  document.body.classList.add("night");
  // document.querySelector(".opciones p i.ril-toggle-off").classList.add('active');
} else {
  document.body.classList.remove("night");
  //document.querySelector(".opciones p i.ril-toggle-off").classList.remove("active");
}
