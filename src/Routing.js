import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Weather from "./components/Weather";

export default function Routing() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/">
            <Weather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
