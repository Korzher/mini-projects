import { useState, useEffect } from "react";

export default function WeatherDisplay(props) {
  const { zip } = props;
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchAPIData() {
      const URL =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        zip +
        "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
      try {
        const res = await fetch(URL);
        const apiData = await res.json();

        setWeatherData(apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, [zip]);

  const weather = weatherData?.weather[0];
  const iconUrl = "http://openweathermap.org/img/w/" + weather?.icon + ".png";

  if (!weatherData) {
    return <div>Loading</div>;
  }
  return (
    <div className="displayWeather">
      <h1>
        {weather?.main} in {weatherData.name}
        <img src={iconUrl} alt={weatherData.description} />
      </h1>
      <p>Current: {weatherData.main.temp}°</p>
      <p>High: {weatherData.main.temp_max}°</p>
      <p>Low: {weatherData.main.temp_min}°</p>
      <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
    </div>
  );
}
