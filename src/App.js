import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import { Geolocation, Camera, Offline, Reachability, Position } from "./components";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="Navbar">
            <li>
              <NavLink className="Navlink" activeClassName="Active-navlink" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="Navlink" activeClassName="Active-navlink" to="/geolocation">
                Geolocation
              </NavLink>
            </li>
            <li>
              <NavLink className="Navlink" activeClassName="Active-navlink" to="/offline">
                Offline
              </NavLink>
            </li>
            <li>
              <NavLink className="Navlink" activeClassName="Active-navlink" to="/camera">
                Camera
              </NavLink>
            </li>
            <li>
              <NavLink className="Navlink" activeClassName="Active-navlink" to="/reachability">
                Reachability
              </NavLink>
            </li>
            <li>
              <NavLink className="Navlink" activeClassName="Active-navlink" to="/position">
                Position
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <div>Use the navbar above to check out the functionality of the app</div>
          </Route>
          <Route path="/geolocation">
            <Geolocation />
          </Route>
          <Route path="/offline">
            <Offline />
          </Route>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/reachability">
            <Reachability />
          </Route>
          <Route path="/position">
            <Position />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
