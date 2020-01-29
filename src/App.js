import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import Cabecera from "./components/Cabecera";
import Home from "./components/Home";
import Circuitos from "./components/circuitos/Circuitos";
import Equipos from "./components/equipos/Equipos";
import EquipoFicha from "./components/equipos/EquipoFicha";
import Pilotos from "./components/pilotos/Pilotos";
import PilotoFicha from "./components/pilotos/PilotoFicha";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route path="/" component={Cabecera} />
          <Route path="/home" component={Home} />
          <Route path="/circuitos" component={Circuitos} />
          <Route path="/equipos" component={Equipos} />
          <Route path="/equipoFicha/:equipoId" component={EquipoFicha} />
          <Route path="/pilotos" component={Pilotos} />
          <Route path="/pilotoFicha/:pilotoId" component={PilotoFicha} />
        </Router>
      </div>
    );
  }
}

export default App;
