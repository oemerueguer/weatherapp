import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./Home.css";
import Image from "./img/weather.jpg";

const useStyles = makeStyles((theme) => ({
  marginAutoItem: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#2B2D35",
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100vw",
    heigth: '100vh',
    margin: "0 auto",
  },
  bgImage: {
    display: "flex",
    position: "relative",
    width: "100vw",
    height: "60vh",
  },
  wrap: {
    flexWrap: "wrap",
  },
  WeatherImage: {
    height: "100%",
    width: "49%",
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Image})`,
  },
  TextContent: {
    width: "52%",
    textAlign: "center",
  },
  SearchBtn: {
    width: "25%",
    marginLeft: "0%",
    border: "2px solid white",
    cursor: "pointer",
    padding: '1%',
    justifyContent: "center",
    textAlign: "center",
    textDecoration: "none",
    backgroundColor: "white",
    color: "black",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.marginAutoItem}>Weather App</h1>
      <div className={classes.flexContainer} xs={12} sm={12} md={6}>
        <div className={`${classes.bgImage}`}>
          <Box className={classes.WeatherImage} xs={12} sm={12} md={6}></Box>
          <Box className={classes.TextContent} xs={12} sm={12} md={6}>
            <h2>Welcome to our Weather App</h2>
            <p>
              With clicking on Search, you are able to search for the Weather forecast in your city.<br/>
              Make your journey enjoyable!
            </p>
            <Link
              to="/weather"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className={classes.SearchBtn}>Search for a city</div>
            </Link>
          </Box>
        </div>
      </div>
    </>
  );
}
