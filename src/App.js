import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

import Circuitos from "./components/circuitos/Circuitos";
import Equipos from "./components/equipos/Equipos";
import Pilotos from "./components/pilotos/Pilotos";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            path="/"
            render={() => {
              return (
                <div className="portada">
                  <Link to="/">Home</Link>
                  <ul className="menu list-inline">
                    <li>
                      <Link to="/circuitos">Circuitos</Link>
                    </li>
                    <li>
                      <Link to="/equipos">Equipos</Link>
                    </li>
                    <li>
                      <Link to="/pilotos">Pilotos</Link>
                    </li>
                  </ul>
                </div>
              );
            }}
          />
          <Route path="/circuitos" component={Circuitos} />
          <Route path="/equipos" component={Equipos} />
          <Route path="/pilotos" component={Pilotos} />
        </Router>
      </div>
    );
  }
}

export default App;
