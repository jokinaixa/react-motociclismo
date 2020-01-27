import React, { Component } from "react";
import "./Circuitos.scss";

import Circuito from "./Circuito";
import circuitosData from "../../data/circuitos.json";

class Circuitos extends Component {
  state = {
    circuitos: []
  };

  async componentDidMount() {
    // HTTP
    //const res = await fetch('http://localhost:8080/api/obtenerCircuitos.php')
    //const data = await res.json();

    // JSON
    const data = await circuitosData;

    this.setState({ circuitos: data });
  }

  render() {
    return (
      <div>
        <h1>{this.state.circuitos.length} Circuitos</h1>
        <ul className="listado">
          {this.state.circuitos.map(circuito => (
            <Circuito circuito={circuito} key={circuito.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Circuitos;
