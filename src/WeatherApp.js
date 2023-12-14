import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState("");

  function showTemperature(response) {
    setWeatherData({
      humidity: response.data.main.humidity,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City.."
                className="form-control"
                autofocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Wednesday 09:00</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconurl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left" />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind}KM/Hr</li>
          </ul>
        </div>
      </div>
    );
  } else {
    let Apikey = "bd5b4461863eddaa6ced0a0a67989e0a";
    let city = "Nigeria";
    let Apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;
    axios.get(Apiurl).then(showTemperature);
    return "Loading";
  }
}
