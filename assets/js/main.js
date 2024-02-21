const searchTerm = document.querySelector("#search-term");
const searchHint = document.querySelector("#search-hint");

searchTerm.addEventListener("input", () => {
  if (searchTerm.value.length !== 0) {
    searchHint.style.display = "block";
  } else {
    searchHint.style.display = "none";
  }
});
