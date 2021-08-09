import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Weather.css";
import Axios from "axios";
require("dotenv").config();
console.log(process.env);

const Weather = () => {
  /* setting the states */
  const [weatherCondition, setWeatherCondition] = useState();
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
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  return (
    <>
      <div className="WeatherContent">
        <div className="InputContent">
          <div className="City">
            <h1>CityName</h1>
          </div>
          <div className="CountryAbbreviation">
            <p>City Abbreviation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
