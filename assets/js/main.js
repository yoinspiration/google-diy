const form = document.querySelector("form");
const searchBar = form.querySelector(".search-bar");
const closeIcon = searchBar.querySelector(".icon-close");
const searchTerm = searchBar.querySelector("#search-term");
const searchHint = form.querySelector("#search-hint");
const language = document.querySelector(".language");
const div = searchBar.querySelector("#controls");

const operation = () => {
  if (searchTerm.value.length !== 0) {
    searchHint.style.display = "block";
    form.style.backgroundColor = "#303134";
    searchBar.style.borderBottomLeftRadius = "0px";
    searchBar.style.borderBottomRightRadius = "0px";
    div.style.borderBottom = "1px solid gray";
    language.style.display = "none";
    closeIcon.style.display = "block";
    searchTerm.style.width = "414px";
  } else {
    searchHint.style.display = "none";
    form.style.backgroundColor = "transparent";
    div.style.borderBottom = "none";
    language.style.display = "block";
    searchBar.style.borderBottomLeftRadius = "25px";
    searchBar.style.borderBottomRightRadius = "25px";
    closeIcon.style.display = "none";
    searchTerm.style.width = "443px";
  }
};

closeIcon.addEventListener("click", () => {
  searchTerm.value = "";
  searchTerm.focus();
  operation();
});

searchTerm.addEventListener("input", () => {
  operation();
});
