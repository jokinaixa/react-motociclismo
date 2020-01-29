import React, { Component } from "react";

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
        <hr />
        <ul className="nav nav-pills">
          {this.state.categorias.map((categoria, index) => (
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
