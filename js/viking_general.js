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


