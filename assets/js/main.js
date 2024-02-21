const searchTerm = document.querySelector("#search-term");
const searchHint = document.querySelector("#search-hint");

searchTerm.addEventListener("input", () => {
  searchHint.textContent = searchTerm.value;
});
