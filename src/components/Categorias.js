import React, { Component } from "react";

import categoriasData from "../data/categorias.json";

class Categorias extends Component {
  constructor(props) {
    super(props);
    this.filtrar = this.props.filtrar.bind(this);
  }

  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          {categoriasData.map((categoria, index) => (
            <li className="nav-item" key={index}>
              <a
                href="false"
                style={{ cursor: "pointer" }}
                className={
                  categoria === this.props.cat ? "nav-link active" : "nav-link"
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
      </div>
    );
  }
}

export default Categorias;
