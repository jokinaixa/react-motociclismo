import React, { Component } from "react";

import Categorias from "../Categorias";
import Equipo from "./Equipo";

import equiposData from "../../data/equipos.json";

class Equipos extends Component {
  cat = "MotoGP";

  state = {
    equipos: []
  };

  componentDidMount() {
    this.filtrar(this.cat);
  }

  async filtrar(categoria) {
    this.cat = categoria;

    //const res = await fetch(`http://localhost:8080/api/obtenerEquipos.php`);
    //const equiposData = await res.json();

    console.log("kk3");

    const data = equiposData.filter(equipo => equipo.categoria === categoria);
    this.setState({ equipos: data });
  }

  render() {
    return (
      <div>
        <h1>{this.state.equipos.length} Equipos</h1>
        <hr />
        <Categorias filtrar={this.filtrar} cat={this.cat} />
        <br />
        <div className="row row-cols-1 row-cols-md-3">
          {this.state.equipos.map(equipo => (
            <div className="col mb-4" key={equipo.id}>
              <Equipo equipo={equipo} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Equipos;
