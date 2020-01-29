import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Equipo.scss";

class Equipo extends Component {
  render() {
    const { equipo } = this.props;

    return (
      <div className="card">
        <img src={equipo.imagen} alt={equipo.nombre} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-center" style={titulo}>
            <Link to={{ pathname: `/equipoFicha/${equipo.id}` }}>
              {equipo.nombre}
            </Link>
          </h5>
        </div>
      </div>
    );
  }
}

Equipo.propType = {
  piloto: PropTypes.object.isRequired
};

const titulo = {
  fontStyle: "italic",
  color: "#c4c2bd"
};

export default Equipo;
