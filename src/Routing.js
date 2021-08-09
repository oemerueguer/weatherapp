import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Weather from "./components/Weather";
import Search from "./components/Search";
import Footer from "./components/Footer";

export default function Routing() {
  return (
    <>
    <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/weather">
            <Weather />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    </div>
    <Footer />
    </>
  );
}
