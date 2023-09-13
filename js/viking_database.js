/* -----------------------------------------
Database url:
https://dxjndlaoykzgvhimnoof.supabase.co
API key:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4am5kbGFveWt6Z3ZoaW1ub29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MTc2MzMsImV4cCI6MjAxMDE5MzYzM30._r8hyVe9Jga-JPqC2h1OR2cSVZaJtXgmlmxA_ocNzPE
-------------------------------------------- */
const supabase_db = "https://dxjndlaoykzgvhimnoof.supabase.co/";
const viking_db = "rest/v1/viking_single";
const basFilter = "";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4am5kbGFveWt6Z3ZoaW1ub29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MTc2MzMsImV4cCI6MjAxMDE5MzYzM30._r8hyVe9Jga-JPqC2h1OR2cSVZaJtXgmlmxA_ocNzPE";

//betinget valg af urlParams
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// hente data'en fra vores flotte database, filter tilføjet
fetch(supabase_db + viking_db + basFilter, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(getIngredients);

//   første trind, fang alle ting i tablen
function getIngredients(getIngredient) {
  getIngredient.forEach(showIngredient);
}
// andre trind, pluk ud de enkelte ingredienser og lav liste view
function showIngredient(ing) {
  console.log(ing.season);
  console.log(id);
  //laver copies ud fra vores template og tilføjer til clones.
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("ingredientName").textContent = ing.ingredientName;
  copy.querySelector("ingredientImg").src = ing.ingredientImg;
  copy.querySelector("visninger").textContent = ing.visninger;
  copy.querySelector("sankeType").textContent = ing.sankeType;
  copy.querySelector("season").textContent = ing.season;
  copy.querySelector("sankeTypeFirst").textContent = img.sankeTypeFirst;
  copy.querySelector("sankeTypeFirstDesc").textContent = img.sankeTypeFirstDesc;
  copy.querySelector("sankeTypeFirstDescTwo").textContent = img.sankeTypeFirstDescTwo;
  copy.querySelector("sankeTypeFirstImg").src = img.sankeTypeFirstImg;
  copy.querySelector("sankeTypeSecond").textContent = ing.sankeTypeSecond;
  copy.querySelector("sankeTypeSecondDesc").textContent = ing.sankeTypeSecondDesc;
  copy.querySelector("sankeTypeSecondDescTwo").textContent = ing.sankeTypeSecondDescTwo;
  copy.querySelector("sankeTypeSecondImg").src = ing.sankeTypeSecondImg;
  copy.querySelector("sankeTypeThird").textContent = ing.sankeTypeThird;
  copy.querySelector("sankeTypeThirdDesc").textContent = ing.sankeTypeThirdDesc;
  copy.querySelector("sankeTypeThirdDescTwo").textContent = ing.sankeTypeThirdDescTwo;
  copy.querySelector("sankeTypeThirdImg").src = ing.sankeTypeThirdImg;
  //vi sørger for at hver kopi tilføjes ind i vores container
  const parent = document.querySelector("list_container");
  parent.appendChild(copy);
}

/*
VORES FLOTTE DATABASE ####

Object { id: 308, visninger: 5331, ingredientName: "Fuglegræs", ingredientImg: "https://vildmadv2.vps.webdock.io/application/files/1016/2437/0364/Fuglegraes_ravarkort_app.png", type: "Urter og mindre vækster", season: "0,1,2,3", "season/0": 0, "season/1": 1, "season/2": 2, "season/3": 3, … }
​{
  id: 308
  ingredientImg: "https://vildmadv2.vps.webdock.io/application/files/1016/2437/0364/Fuglegraes_ravarkort_app.png"
  ingredientName: "Fuglegræs"
  sankeTypeFirst: "Hegn"
  sankeTypeFirstDesc: "Tæt bevokset"
  sankeTypeFirstDescTwo: "Åbent"
  sankeTypeFirstImg: "https://vildmadv2.vps.webdock.io/application/files/2114/9036/4146/hegn.jpg"
  sankeTypeSecond: "Grøftekant"
  sankeTypeSecondDesc: "Næringsfattig"
  sankeTypeSecondDescTwo: "Næringsrig"
  sankeTypeSecondImg: "https://vildmadv2.vps.webdock.io/application/files/4616/2089/7447/VILDMAD_BT_Groftekant_05.jpg"
  sankeTypeThird: "Græsland"
  sankeTypeThirdDesc: "Næringsfattig"
  sankeTypeThirdDescTwo: "Næringsrig"
  sankeTypeThirdImg: "https://vildmadv2.vps.webdock.io/application/files/7916/2089/7481/Vildmad_BT_Gresland_09.jpg"
  season: "0,1,2,3"
  "season/0": 0
  "season/1": 1
  "season/2": 2
  "season/3": 3
  type: "Urter og mindre vækster"
  visninger: 5331
}
*/

/*
ORIGINALE DATABASEN ####
{
    "id": 393,
    "title": "Stor løghat",
    "view_counter": 1341,
    "publish_time": 1633434261,
    "season/0": 8,
    "season/1": 9,
    "season/2": null,
    "season/3": null,
    "categories/0/name": "Svampe",
    "categories/0/info": null,
    "sankelandskaber/0/id": 179,
    "sankelandskaber/0/title": "Løvskov",
    "sankelandskaber/0/sub_biotope_question": "Hvordan er jordens karakter i skoven?",
    "sankelandskaber/0/characteristic_question": "Hvordan er skovbunden?",
    "sankelandskaber/0/color": "#009748",
    "sankelandskaber/0/profile_image/src": "https://vildmadv2.vps.webdock.io/application/files/1016/2089/8647/VILDMAD_BT_Lovskov_08.jpg",
    "sankelandskaber/0/profile_image/id": 5383,
    "sankelandskaber/0/sub_biotopes/0/id": 1981,
    "sankelandskaber/0/sub_biotopes/0/title": "Morbund",
    "sankelandskaber/0/sub_biotopes/1/id": 1982,
    "sankelandskaber/0/sub_biotopes/1/title": "Mulbund",
    "sankelandskaber/1/id": 181,
    "sankelandskaber/1/title": "By",
    "sankelandskaber/1/sub_biotope_question": "Hvor er du i byens landskab?",
    "sankelandskaber/1/characteristic_question": null,
    "sankelandskaber/1/color": "#4B3C67",
    "sankelandskaber/1/profile_image/src": "https://vildmadv2.vps.webdock.io/application/files/9414/9812/0663/VILDMAD_BT_BY_03-squashed.jpg",
    "sankelandskaber/1/profile_image/id": 1783,
    "sankelandskaber/1/sub_biotopes/0/id": 1992,
    "sankelandskaber/1/sub_biotopes/0/title": "Park/have",
    "sankelandskaber/1/sub_biotopes/1/id": 1993,
    "sankelandskaber/1/sub_biotopes/1/title": "Kyst/havn",
    "profile_image/src": "https://vildmadv2.vps.webdock.io/application/files/1616/2451/8592/Stor-loghat_ravarekort_app.png",
    "profile_image/id": 5552,
    "season/4": null,
    "season/5": null,
    "sankelandskaber/2/id": null,
    "sankelandskaber/2/title": null,
    "sankelandskaber/2/sub_biotope_question": null,
    "sankelandskaber/2/characteristic_question": null,
    "sankelandskaber/2/color": null,
    "sankelandskaber/2/profile_image/src": null,
    "sankelandskaber/2/profile_image/id": null,
    "sankelandskaber/2/sub_biotopes/0/id": null,
    "sankelandskaber/2/sub_biotopes/0/title": null,
    "sankelandskaber/2/sub_biotopes/1/id": null,
    "sankelandskaber/2/sub_biotopes/1/title": null,
    "sankelandskaber/2/biotope_characteristic/0/id": null,
    "sankelandskaber/2/biotope_characteristic/0/title": null,
    "sankelandskaber/2/biotope_characteristic/1/id": null,
    "sankelandskaber/2/biotope_characteristic/1/title": null,
    "season/6": null,
    "season/7": null,
    "sankelandskaber/0/biotope_characteristic/0/id": null,
    "sankelandskaber/0/biotope_characteristic/0/title": null,
    "sankelandskaber/0/biotope_characteristic/1/id": null,
    "sankelandskaber/0/biotope_characteristic/1/title": null,
    "sankelandskaber/3/id": null,
    "sankelandskaber/3/title": null,
    "sankelandskaber/3/sub_biotope_question": null,
    "sankelandskaber/3/characteristic_question": null,
    "sankelandskaber/3/color": null,
    "sankelandskaber/3/profile_image/src": null,
    "sankelandskaber/3/profile_image/id": null,
    "sankelandskaber/3/sub_biotopes/0/id": null,
    "sankelandskaber/3/sub_biotopes/0/title": null,
    "sankelandskaber/3/sub_biotopes/1/id": null,
    "sankelandskaber/3/sub_biotopes/1/title": null,
    "sankelandskaber/1/biotope_characteristic/0/id": null,
    "sankelandskaber/1/biotope_characteristic/0/title": null,
    "sankelandskaber/1/biotope_characteristic/1/id": null,
    "sankelandskaber/1/biotope_characteristic/1/title": null,
    "sankelandskaber/4/id": null,
    "sankelandskaber/4/title": null,
    "sankelandskaber/4/sub_biotope_question": null,
    "sankelandskaber/4/characteristic_question": null,
    "sankelandskaber/4/color": null,
    "sankelandskaber/4/profile_image/src": null,
    "sankelandskaber/4/profile_image/id": null,
    "sankelandskaber/4/sub_biotopes/0/id": null,
    "sankelandskaber/4/sub_biotopes/0/title": null,
    "sankelandskaber/4/sub_biotopes/1/id": null,
    "sankelandskaber/4/sub_biotopes/1/title": null,
    "sankelandskaber/5/id": null,
    "sankelandskaber/5/title": null,
    "sankelandskaber/5/sub_biotope_question": null,
    "sankelandskaber/5/characteristic_question": null,
    "sankelandskaber/5/color": null,
    "sankelandskaber/5/profile_image/src": null,
    "sankelandskaber/5/profile_image/id": null,
    "sankelandskaber/5/sub_biotopes/0/id": null,
    "sankelandskaber/5/sub_biotopes/0/title": null,
    "sankelandskaber/5/sub_biotopes/1/id": null,
    "sankelandskaber/5/sub_biotopes/1/title": null,
    "sankelandskaber/6/id": null,
    "sankelandskaber/6/title": null,
    "sankelandskaber/6/sub_biotope_question": null,
    "sankelandskaber/6/characteristic_question": null,
    "sankelandskaber/6/color": null,
    "sankelandskaber/6/profile_image/src": null,
    "sankelandskaber/6/profile_image/id": null,
    "sankelandskaber/6/sub_biotopes/0/id": null,
    "sankelandskaber/6/sub_biotopes/0/title": null,
    "sankelandskaber/6/sub_biotopes/1/id": null,
    "sankelandskaber/6/sub_biotopes/1/title": null,
    "sankelandskaber/3/biotope_characteristic/0/id": null,
    "sankelandskaber/3/biotope_characteristic/0/title": null,
    "sankelandskaber/3/biotope_characteristic/1/id": null,
    "sankelandskaber/3/biotope_characteristic/1/title": null,
    "season/8": null,
    "season/9": null,
    "season/10": null,
    "season/11": null,
    "sankelandskaber/7/id": null,
    "sankelandskaber/7/title": null,
    "sankelandskaber/7/sub_biotope_question": null,
    "sankelandskaber/7/color": null,
    "sankelandskaber/7/profile_image/src": null,
    "sankelandskaber/7/profile_image/id": null,
    "sankelandskaber/7/sub_biotopes/0/id": null,
    "sankelandskaber/7/sub_biotopes/0/title": null,
    "sankelandskaber/7/sub_biotopes/1/id": null,
    "sankelandskaber/7/sub_biotopes/1/title": null,
    "sankelandskaber/4/biotope_characteristic/0/id": null,
    "sankelandskaber/4/biotope_characteristic/0/title": null,
    "sankelandskaber/4/biotope_characteristic/1/id": null,
    "sankelandskaber/4/biotope_characteristic/1/title": null
}
*/
