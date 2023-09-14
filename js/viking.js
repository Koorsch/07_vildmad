// hente "tilbage til toppen" knappen
const scroller = document.querySelector("#scrollUp");
// Når man scroller 250px ned kommer knappen frem
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    scroller.style.display = "block";
  } else {
    scroller.style.display = "none";
  }
}
// Når man klikker på knappen, hopper den tilbage til toppen
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const data = [
  /* Your list of elements from the database */
];
function forms() {
  const searchInput = document.getElementById("searchInput");
  const resultsList = document.getElementById("resultsList");
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filteredData = data.filter((item) => item.toLowerCase().includes(query));
    // Clear previous results
    resultsList.innerHTML = "";
    // Display filtered results
    filteredData.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      resultsList.appendChild(listItem);
    });
  });
}
// burgermenu
const toggle = document.querySelector(".burger");
const links = document.querySelector(".nav_link");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
  toggle.classList.toggle("active");
});
