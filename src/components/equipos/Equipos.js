import React, { Component } from "react";
import "./Equipos.scss";

import Equipo from "./Equipo";
//import equiposData from "../../data/equipos.json";
import categoriasData from "../../data/categorias.json";

class Equipos extends Component {
  cat = "MotoGP";

  state = {
    equipos: [],
    categorias: []
  };

  componentDidMount() {
    this.filtrar(this.cat);
    this.setState({ categorias: categoriasData });
  }

  async filtrar(categoria) {
    this.cat = categoria;

    const res = await fetch(`http://localhost:8080/api/obtenerEquipos.php`);
    const equiposData = await res.json();

    const data = equiposData.filter(element => element.categoria === categoria);
    this.setState({ equipos: data });
  }

  render() {
    return (
      <div>
        <h1>{this.state.equipos.length} Equipos</h1>
        <ul className="categoria list-inline">
          {this.state.categorias.map((categoria, index) => (
            <li
              className={categoria === this.cat ? "active" : ""}
              onClick={() => this.filtrar(categoria)}
              key={index}
            >
              {categoria}
            </li>
          ))}
        </ul>
        <ul className="listado">
          {this.state.equipos.map(equipo => (
            <Equipo equipo={equipo} key={equipo.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Equipos;
