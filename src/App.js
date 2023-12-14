import "./App.css";
import WeatherApp from "./WeatherApp";
function App() {
  return (
    <div className="App">
      <WeatherApp />
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
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
