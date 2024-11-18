import React, {useState} from 'react';
import clearIcon from "../assets/images/clear.png"
import cloudIcon from "../assets/images/clouds.png"
import dizzleIcon from "../assets/images/drizzle.png"
import mistIcon from "../assets/images/mist.png"
import snowIcon from "../assets/images/snow.png"
import rainIcon from "../assets/images/rain.png"
import humidityIcon from "../assets/images/humidity.png"
import windIcon from "../assets/images/wind.png"

function WeatherDetails({ weather }) {
  const [isCelsius, setIsCelsius] = useState(true); 

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const getTemperature = () => {
    if (isCelsius) {
      return `${weather.temp}°C`;
    } else {
      const fahrenheit = (weather.temp * 9) / 5 + 32;
      return `${Math.round(fahrenheit)}°F`;
    }
  };

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case "Clear":
        return clearIcon;
      case "Clouds":
        return cloudIcon;
      case "Drizzle":
        return dizzleIcon;
      case "Mist":
      case "Fog":
      case "Haze":
        return mistIcon;
      case "Snow":
        return snowIcon;
      default:
        return rainIcon;
    }
  };

  return (
    <div className="weather">
      <img
        src={getWeatherIcon(weather.weatherMain)}
        alt={weather.weatherMain}
        className="weather-icon"
      />
      <h1 className="temp">{getTemperature()}</h1>
      <button className='toggle_btn' onClick={toggleUnit}>
        Switch to {isCelsius ? "°F" : "°C"}
      </button>
      <h2 className="city">{weather.city}</h2>
      <div className="details">
        <div className="col">
          <img src={humidityIcon} alt="humidity" />
          <div>
            <p className="humidity">{weather.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src={windIcon} alt="humidity" />
          <div>
            <p className="wind">{weather.wind} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;