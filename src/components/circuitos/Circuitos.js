import React, { Component } from "react";

import CircuitoForm from "./CircuitoForm";
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

  addCircuito = (nombre, longitud) => {
    const newCircuito = {
      nombre: nombre,
      longitud: longitud,
      id: this.state.length * 100
    }
    this.setState({
      circuitos: [...this.state.circuitos, newCircuito]
    })
  }

  deleteCircuito = (id) => {
    //const newCircuitos = this.state.circuitos.filter(circuito => circuito.id !== id)
    //this.setState({circuitos: newCircuitos})
  }


  render() {
    return (
      <div>
        <CircuitoForm addCircuito={this.addCircuito} />
        <h1>{this.state.circuitos.length} Circuitos</h1>
        <hr />
        <div className="row row-cols-1 row-cols-md-4">
          {this.state.circuitos.map(circuito => (
            <div className="col mb-3" key={circuito.id}>
              <Circuito circuito={circuito} deleteCircuito={this.deleteCircuito} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Circuitos;
