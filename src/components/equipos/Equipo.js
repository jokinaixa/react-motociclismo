import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Equipo.scss";

class Equipo extends Component {
  render() {
    const { equipo } = this.props;

    return (
      <li>
        <div className="tarjeta">
          <div className="fondoImg">
            <img src={equipo.imagen} alt={equipo.nombre} />
          </div>
          <h2 style={titulo}>{equipo.nombre}</h2>
        </div>
      </li>
    );
  }
}

Equipo.propType = {
  piloto: PropTypes.object.isRequired
};

const titulo = {
  fontStyle: "italic",
  color: "#dfdfdf"
};

export default Equipo;
