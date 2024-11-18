import React, { useState } from 'react';
import Search from './components/Search';
import ErrorMessage from './components/ErrorMessage';
import WeatherDetails from './components/WeatherDetails';
import "./App.css"

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  const fetchWeather = async (city) => {
    const apiKey = "5b0c3d6a75b7215dfb0a9f09e0e6d736";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();

      if (result.cod === "404") {
        setError(true);
        setWeather(null);
        setShowWeather(false);
      } else {
        setWeather({
          temp: Math.round(result.main.temp),
          city: result.name,
          humidity: result.main.humidity,
          wind: result.wind.speed,
          weatherMain: result.weather[0].main,
        });
        setError(false);
        setShowWeather(true);
      }
    } catch (err) {
      console.error("Can not fetch weather data:", err);
      setError(true);
    }
  };

  return (
    <div className="card">
      <Search onSearch={fetchWeather} />
      {error && <ErrorMessage />}
      {showWeather && weather && <WeatherDetails weather={weather} />}
    </div>
  );
}

export default App;
