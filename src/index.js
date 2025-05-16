let form = document.querySelector("form");
form.addEventListener("submit", searchBar);

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

  getForecast(response.data.city);
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

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
function formatDay(timeStamp) {
  let date = new Date(timeStamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function displayForecast(response) {
  console.log(response.data);
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
  <div class="weather-forecast-day">
    <div class="weather-forecast-date">${formatDay(day.time)}</div>
    
    
      <img src="${day.condition.icon_url}" class="weather-forecast-icon"/>
    
    <div class="weather-forecast-temperatures">
      <div class="weather-forecast-temperature">
        <strong>${Math.round(day.temperature.maximum)}ºC</strong>
      </div>
      <div class="weather-forecast-temperature">${Math.round(
        day.temperature.minimum
      )}ºC</div>
    </div>
  </div>
  `;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

function getForecast(city) {
  let apiKey = "ee0d5af457458510ac3bat64c8bo7383";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios(apiUrl).then(displayForecast);
}

searchCity("Kimberley");
getForecast("Kimberley");
