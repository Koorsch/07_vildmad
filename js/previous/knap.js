// hente "tilbage til toppen" knappen
let mybutton = document.getElementById("tilToppenKnap");

// Når man scroller 250px ned kommer knappen frem
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Når man klikker på knappen, hopper den tilbage til toppen
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
