const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showIngredients(data));

function showIngredients(ingredients) {
  //loope
  ingredients.forEach(showIngredient);
}

function showIngredient(ingredient) {
  console.log(ingredient);

  const template = document.querySelector("template").content;
  //lav en kopi
  const copy = template.cloneNode(true);

  /* copy.querySelector("a").textContent = category.category;

  copy.querySelector(".categoryLink").setAttribute("href", `produktliste.html?category=${category.category}`); */

  document.querySelector("main").appendChild(copy);
}
