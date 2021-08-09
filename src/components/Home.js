import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <h1 className="HomeHeading">The Weather Forecast</h1>
      <div className="flexContainer">
        <div className="bgImage">
          <div className="WeatherImage"></div>
          <div className="TextContent">
            <h2 className="Heading">Welcome to our Weather App</h2>
            <p className="Paragraph">
              Click on Search to see the Weather forecast in your desired city.
              <br />
              Make your journey enjoyable!
            </p>
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "black"}}
            >
              <div className="GoSearchBtn">
                <i className="fas fa-search" />
                Search for a city
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
