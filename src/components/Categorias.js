import React, { Component } from "react";

import categoriasData from "../data/categorias.json";

class Categorias extends Component {
  cat = "MotoGP";

  state = {
    categorias: []
  };

  async componentDidMount() {
    this.filtrar(this.cat);
    this.setState({ categorias: categoriasData });
  }

  filtrar = categoria => {
    this.cat = categoria;
  };

  render() {
    return (
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
    );
  }
}

export default Categorias;
