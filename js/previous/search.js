const data = [
  /* Your list of elements from the database */
];

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
