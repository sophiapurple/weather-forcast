function displayWeather(response) {
  console.log(response);
  let cityElement = document.querySelector(h1);
  let city = document.querySelector("#input-text").value;
  cityElement.innerHTML = city;
}

function searchCity(city) {
  let apiKey = "93cf0a589b1befff9b43f05fbt79bo02";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  cityInput = document.querySelector("#input-text");
  searchCity(cityInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
searchCity(city);
