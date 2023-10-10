import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [weather, setWeather] = useState("");
  let [city, setCity] = useState("");

  function showTemperature(response) {
    setWeather({
      humidity: response.data.main.humidity,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      date: formatDate(response.data.dt * 1000),
    });
    showForecast(response.data.coord);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    return (
      <h3>
        `The ${weather} in ${city} is warm`
      </h3>
    );
  }
  function formatDate(timestamp) {
    let now = new Date(timestamp);
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[now.getDay()];
    let year = now.getFullYear();
    return `${year},${day} ${hours}:${minutes}`;
  }
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }
  function displayForecast(response) {
    let forecast = response.data.daily;
    let forecastElement = document.querySelector("#forecast");
    let forecastHTML = `<div class="row">`;
    forecast.forEach(function (forecastDay, index) {
      if (index < 6) {
        forecastHTML =
          forecastHTML +
          `<div class="col-2">
              <div class="weather-forecast-dates">${formatDay(
                forecastDay.dt
              )}</div>
              <img
                src="https://openweathermap.org/img/wn/${
                  forecastDay.weather[0].icon
                }@2x.png"
                alt=""
                width="40"
              />
              <div class="weather-forecast-temperature">
                <span class="weather-forecast-temperature-max">${Math.round(
                  forecastDay.temp.max
                )}°</span>
                <span class="weather-forecast-temperature-min">${Math.round(
                  forecastDay.temp.min
                )}°</span>
              </div>  
            </div>
            `;
      }
    });
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
  }
  function showForecast(coordinates) {
    console.log(coordinates);
    let Apikey = "bd5b4461863eddaa6ced0a0a67989e0a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${Apikey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayForecast);
  }

  function search(city) {
    let Apikey = "bd5b4461863eddaa6ced0a0a67989e0a";
    let Apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;
    axios.get(Apiurl).then(showTemperature);
  }
  function searchForm(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city-input");
    search(cityElement.value);
  }
  search("Nigeria");

  <form onSubmit={searchForm}>
    <input
      type="search"
      placeholder="Type a City"
      autoFocus="on"
      onChange={updateCity}
    />
    <input type="submit" value="search" />
  </form>;
}
