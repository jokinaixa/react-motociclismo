import React, { Component } from "react";

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
        <hr />
        <div className="row row-cols-1 row-cols-md-4">
          {this.state.circuitos.map(circuito => (
            <div className="col mb-3" key={circuito.id}>
              <Circuito circuito={circuito} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Circuitos;
