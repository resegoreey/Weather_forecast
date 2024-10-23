function searchBar(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#js-search-bar");
  let h1 = document.querySelector("#js-city-display");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", searchBar);
