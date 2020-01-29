import React, { Component } from "react";

import PilotosEquipo from "../pilotos/PilotosEquipo";
import Equipo from "./Equipo";

class EquipoFicha extends Component {
  state = {
    id: null,
    imagen: "",
    nombre: ""
  };

  async componentDidMount() {
    const { equipoId } = this.props.match.params;

    const res = await fetch(
      `http://localhost:8080/api/mostrarEquipo.php?id=${equipoId}`
    );
    const data = await res.json();

    this.setState({
      id: equipoId,
      imagen: data.imagen,
      nombre: data.nombre
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Equipo equipo={this.state} />
        </div>

        <div className="col-4">
          <PilotosEquipo equipoId={this.props.match.params} />
        </div>
      </div>
    );
  }
}

export default EquipoFicha;
