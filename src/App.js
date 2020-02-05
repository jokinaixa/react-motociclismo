import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import Cabecera from "./components/Cabecera";
import Home from "./components/Home";
import Personajes from "./components/personajes/Personajes";
import PersonajeFicha from "./components/personajes/PersonajeFicha";
import Lugares from "./components/lugares/Lugares";
import LugarFicha from "./components/lugares/LugarFicha";
import EpisodioFicha from "./components/episodios/EpisodioFicha";
import Productos from "./components/productos/Productos";
import Hooks from "./components/hooks/RandomPokemon";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Router>
            <Route path="/" component={Cabecera} />
            <Route path="/home" component={Home} />
            <Route path="/personajes" component={Personajes} />
            <Route
              path="/personajeFicha/:idPersonaje"
              component={PersonajeFicha}
            />
            <Route path="/lugares" component={Lugares} />
            <Route path="/lugarFicha/:idLugar" component={LugarFicha} />
            <Route
              path="/episodioFicha/:idEpisodio"
              component={EpisodioFicha}
            />
            <Route path="/productos" component={Productos} />
            <Route path="/hooks" component={Hooks} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
