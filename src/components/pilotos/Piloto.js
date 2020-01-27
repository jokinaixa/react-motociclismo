import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Piloto.scss";

class Piloto extends Component {
  MostrarEdad() {
    return {
      visibility: this.props.piloto.edad > 0 ? "visible" : "hidden"
    };
  }

  render() {
    const { piloto } = this.props;

    return (
      <li>
        <div className="tarjeta">
          <div className="fondoImg">
            <img src={piloto.imagen} alt={piloto.nombre} />
          </div>
          <h2 style={titulo}>
            {piloto.nombre} {piloto.apellido.toUpperCase()}
            <small style={this.MostrarEdad()}>({piloto.edad})</small>
          </h2>
          <h6>{piloto.equipo.nombre}</h6>
        </div>
      </li>
    );
  }
}

Piloto.propType = {
  piloto: PropTypes.object.isRequired
};

const titulo = {
  fontStyle: "italic",
  color: "white"
};

export default Piloto;
