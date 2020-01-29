import React, { Component } from "react";
import "./PilotoFicha.scss";

import Equipo from "../equipos/Equipo";
import Piloto from "./Piloto";

class PilotoFicha extends Component {
  state = {
    id: null,
    imagen: "",
    nombre: "",
    apellido: "",
    dorsal: "",
    fecha: "",
    pais: "",
    edad: "",
    equipo: []
  };

  async componentDidMount() {
    const { pilotoId } = this.props.match.params;

    const res = await fetch(
      `http://localhost:8080/api/mostrarPiloto.php?id=${pilotoId}`
    );
    const data = await res.json();

    this.setState({
      id: pilotoId,
      imagen: data.imagen,
      nombre: data.nombre,
      apellido: data.apellido,
      dorsal: data.dorsal,
      fecha: data.fecha,
      pais: data.pais,
      edad: data.edad,
      equipo: data.equipo
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Piloto piloto={this.state} />
        </div>

        <div className="col-4">
          <Equipo equipo={this.state.equipo} />
        </div>

        <div className="col-4">
          <form>
            <div className="form-group row">
              <label className="col-3 col-form-label">Dorsal</label>
              <div className="col-9">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  value={this.state.dorsal}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label">Fecha</label>
              <div className="col-9">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  value={this.state.fecha}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label">País</label>
              <div className="col-9">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  value={this.state.pais}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label">Edad</label>
              <div className="col-9">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  value={this.state.edad}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PilotoFicha;
