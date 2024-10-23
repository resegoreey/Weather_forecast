function weatherDisplay(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = document.querySelector("#js-city-display");
  city.innerHTML = response.data.city;
  let tempDisplay = document.querySelector("#js-temperature");
  tempDisplay.innerHTML = temperature;
}

function searchBar(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#js-search-bar");
  let city = searchInput.value;

  let apiKey = "ee0d5af457458510ac3bat64c8bo7383";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherDisplay);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchBar);
