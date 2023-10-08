import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <div className="weather-app">
            <form id="search-input" class="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a City"
                    className="form-control"
                    id="city-input"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="Submit"
                    value="search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-6">
                <h1 id="city"></h1>
                <ul id="clear">
                  <li id="date">
                    <span></span>
                  </li>
                  <li id="description"></li>
                </ul>
              </div>
              <div className="col-6">
                <span>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="clear"
                    id="icon"
                  />
                </span>

                <strong id="temperature"></strong>
                <span>°C</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <ul className="weather">
                  <li>
                    Humidity:<span id="humidity"></span>%
                  </li>
                  <li>
                    Wind:<span id="wind"></span>Km/hr
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast">
              <div className="row"></div>
            </div>
          </div>
        </div>
        <div className="name">
          <a
            href="https://github.com/Antoinette-Cordis/WEATHER-APP-PROJECT"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open source
          </a>
          <small> by: Antoinette Cordis Amauba</small>
        </div>

        <Weather city="" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
