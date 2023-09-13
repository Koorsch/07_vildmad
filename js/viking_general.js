/*

Alt der ikke har noget med databasen at gøre; eksempelvis burger meny og andet indehold på hjemmesiden

#### TO-DO
Burgermenu
Anden funktionalitet? Kom med bud!

*/

// burgermenu

const toggle = document.querySelector(".burger");
const links = document.querySelector(".nav_link");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
  toggle.classList.toggle("active");
});


//OPSKRIFTER

// Hide all elements with class="containerTab", except for the one that matches the clickable grid column

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}