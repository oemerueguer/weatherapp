import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Weather.css";
import Axios from "axios";
require("dotenv").config();
console.log(process.env);

const Weather = () => {
  /* setting the states */
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);

  /*to get the states from the input field, use useLocation() */

  let location = useLocation();
  const values = location.state;

  /* API Key */
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetchData();
  }, []);

  /* Fetching Data */
  const fetchData = async () => {
    setLoading(true);
    await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${values}&units=metric&APPID=${apiKey}`
    )
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  };
  console.log(weather);

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <>
        <h1>Actual weather condition in:</h1>
          <div className="WeatherContent">
              <div className="InputContent">
                <div className="CityName">
                  {weather ? <h1>{weather.name}</h1> : "No City Name"}
                </div>
                <div className="CountryName">
                  {weather ? <h1>{weather.sys.country}</h1> : "No Country Name"}
                </div>
              </div>
              <div className="TempArea">
                <div className="Temp">
                  {weather ? (
                    <h2>Temperature: {weather.main.temp} °C</h2>
                  ) : (
                    "No Temp."
                  )}
                  {weather ? (
                    <h2>Feels like: {weather.main.feels_like} °C</h2>
                  ) : (
                    "No data"
                  )}
                </div>
              </div>
              <div className="TempArea">
                <div className="Temp">
                  {weather ? (
                    <h2>Main: {weather.weather[0].main}</h2>
                  ) : (
                    "No Temp."
                  )}
                  {weather ? (
                    <>
                      <h2>{weather.weather[0].description}</h2>
                      <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="Weather Icon"
                      />
                    </>
                  ) : (
                    "No data"
                  )}
                  {weather ? (
                    <h2>Humidity: {weather.main.humidity}</h2>
                  ) : (
                    "No data"
                  )}
                </div>
              </div>
            </div>
        </>
      )}
    </>
  );
};

export default Weather;
