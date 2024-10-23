function searchBar(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#js-search-bar");
  let cityDisplay = document.querySelector("#js-city-display");
  cityDisplay.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", searchBar);
