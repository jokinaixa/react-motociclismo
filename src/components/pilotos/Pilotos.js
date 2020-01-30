import React, { Component } from "react";

import Piloto from "./Piloto";

import pilotosData from "../../data/pilotos.json";
import categoriasData from "../../data/categorias.json";

class Pilotos extends Component {
  cat = "MotoGP";

  state = {
    pilotos: []
  };

  componentDidMount() {
    this.filtrar(this.cat);
  }

  async filtrar(categoria) {
    this.cat = categoria;

    //const res = await fetch(`http://localhost:8080/api/obtenerPilotos.php`);
    //const pilotosData = await res.json();

    const data = pilotosData.filter(
      element => element.equipo.categoria === categoria
    );
    this.setState({ pilotos: data });
  }

  render() {
    return (
      <div>
        <h1>{this.state.pilotos.length} Pilotos</h1>
        <hr />
        <ul className="nav nav-pills">
          {categoriasData.map((categoria, index) => (
            <li className="nav-item" key={index}>
              <a
                href="false"
                style={{ cursor: "pointer" }}
                className={
                  categoria === this.cat ? "nav-link active" : "nav-link"
                }
                onClick={e => {
                  e.preventDefault();
                  this.filtrar(categoria);
                }}
              >
                {categoria}
              </a>
            </li>
          ))}
        </ul>
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
