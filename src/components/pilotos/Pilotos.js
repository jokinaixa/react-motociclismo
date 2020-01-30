import React, { Component } from "react";

import Categorias from "../Categorias";
import Piloto from "./Piloto";

import pilotosData from "../../data/pilotos.json";

class Pilotos extends Component {
  cat = "MotoGP";

  state = {
    pilotos: pilotosData
  };

  componentDidMount() {
    this.filtrar(this.cat);
  }

  filtrar = async categoria => {
    this.cat = categoria;

    //const res = await fetch(`http://localhost:8080/api/obtenerPilotos.php`);
    //const pilotosData = await res.json();

    const data = pilotosData.filter(
      piloto => piloto.equipo.categoria === categoria
    );
    this.setState({ pilotos: data });
  };

  render() {
    return (
      <div>
        <h1>{this.state.pilotos.length} Pilotos</h1>
        <hr />
        <Categorias filtrar={this.filtrar} cat={this.cat} />
        <br />
        <div className="row row-cols-1 row-cols-md-3">
          {this.state.pilotos.map(piloto => (
            <div className="col mb-4" key={piloto.id}>
              <Piloto piloto={piloto} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pilotos;
