/* -----------------------------------------
Database url:
https://dxjndlaoykzgvhimnoof.supabase.co
API key:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4am5kbGFveWt6Z3ZoaW1ub29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5OTM3ODUsImV4cCI6MjAwOTU2OTc4NX0.RkT-LWKiZZJ5f0UCuatvH_RWrtQgmt7jpEefYp7s_9g
-------------------------------------------- */
const url = "https://dxjndlaoykzgvhimnoof.supabase.co/";
const viking = "rest/v1/viking_single";
const basFilter = "?limit=14";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4am5kbGFveWt6Z3ZoaW1ub29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MTc2MzMsImV4cCI6MjAxMDE5MzYzM30._r8hyVe9Jga-JPqC2h1OR2cSVZaJtXgmlmxA_ocNzPE";

const urlParams = new URLSearchParams(window.location.search);
const idIngredient = urlParams.get("id");
const nameIngredient = urlParams.get("ingredientName");
const typeIngredient = urlParams.get("type");

// hente data'en fra vores flotte database
fetch(url + viking + basFilter, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then((data) => showIngredients(data));
//   første trind, fang alle ting i tablen
function showIngredients(ingredients) {
  ingredients.forEach(showIngredient);
}
// andre trind, pluk ud de enkelte ingredienser og lav liste view
function showIngredient(ingredient) {
  if (idIngredient) {
    console.table(this);
    document.querySelector("#ingrediensBild").src = ingredient.ingredientImg;
    document.querySelector("#ingrediensBild").alt = ingredient.ingredientName;
    document.querySelector("#ingrediensNavn").textContent = ingredient.ingredientName;
    document.querySelector("p span").textContent = ingredient.visninger;
  } else {
    const template = document.querySelector("#template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h3").textContent = ingredient.ingredientName;
    copy.querySelector("img").src = ingredient.ingredientImg;
    copy.querySelector(".linkMe").setAttribute("href", `ingredient.html?id=${ingredient.id}`);
    const parent = document.querySelector(".ingrediens_liste");
    parent.appendChild(copy);
  }
}
/*
{
id: 385
ingredientImg: "https://vildmadv2.vps.webdock.io/application/files/2714/9036/9858/skvalderkal.jpg"
ingredientName: "Skvalderkål"
sankeTypeFirst: "Vandløb"
sankeTypeFirstDesc: "Næringsfattig"
sankeTypeFirstDescTwo: "Næringsrig"
sankeTypeFirstImg: "https://vildmadv2.vps.webdock.io/application/files/6116/2201/2158/Vildmad_BT_Vandlob_02_1.jpg"
sankeTypeSecond: "Sø"
sankeTypeSecondDesc: "Næringsfattig"
sankeTypeSecondDescTwo: "Næringsrig"
sankeTypeSecondImg: "https://vildmadv2.vps.webdock.io/application/files/1116/2195/3749/Vildmad_BT_So_01_1.jpg"
sankeTypeThird: "Hegn"
sankeTypeThirdDesc: "Tæt bevokset"
sankeTypeThirdDescTwo: "Åbent"
sankeTypeThirdImg: "https://vildmadv2.vps.webdock.io/application/files/2114/9036/4146/hegn.jpg"
season: "2,3,4,5"
"season/0": 2
"season/1": 3
"season/2": 4
"season/3": 5
type: "Urter og mindre vækster"​
visninger: 3268
}
*/
