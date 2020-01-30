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
        <button onClick={this.props.filtrar.bind(this, "Moto3")}>Moto3</button>
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
                  console.log("kk1");
                  e.preventDefault();
                  console.log("kk2");
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
