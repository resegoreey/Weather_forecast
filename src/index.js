function weatherDisplay(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = document.querySelector("#js-city-display");
  city.innerHTML = response.data.city;
  let tempDisplay = document.querySelector("#js-temperature");
  tempDisplay.innerHTML = temperature;

  let icon = `<img src="${response.data.condition.icon_url} "class="weather-icon" />`;
  let iconDisplay = document.querySelector("#icon");
  iconDisplay.innerHTML = icon;
  console.log(response.data);

  let time = new Date(response.data.time * 1000);
  let timeDisplay = document.querySelector("#time");
  timeDisplay.innerHTML = displayData(time);

  let condition = response.data.condition.description;
  let conditionDisplay = document.querySelector("#condition");
  conditionDisplay.innerHTML = condition;
  let humidity = response.data.temperature.humidity;
  let humidityDisplay = document.querySelector("#humidity");
  humidityDisplay.innerHTML = `${humidity}%`;

  let wind = response.data.wind.speed;
  let windDisplay = document.querySelector("#wind");
  windDisplay.innerHTML = `${wind}km/h`;
}

function searchCity(city) {
  let apiKey = "ee0d5af457458510ac3bat64c8bo7383";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherDisplay);
}

function searchBar(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#js-search-bar");
  searchCity(searchInput.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchBar);

function displayData() {
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${day} ${hours}:${minutes}`;
}
searchCity("Kimberley");
