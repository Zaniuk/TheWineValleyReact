const menu = document.getElementById("menu");
const desplegable = document.getElementById("desplegable");

function desplegarMenu(x) {
  menu.classList.toggle("hide-menu");
  x.classList.toggle("hide");
}
menu.addEventListener("click", () => {
  desplegable.classList.toggle("active");
});
