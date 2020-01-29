import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <div className="card">
        <img src={piloto.imagen} alt={piloto.nombre} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title" style={titulo}>
            <Link to={{ pathname: `/pilotoFicha/${piloto.id}` }}>
              {piloto.nombre} {piloto.apellido.toUpperCase()}
            </Link>
            <small style={this.MostrarEdad()}> ({piloto.edad})</small>
          </h5>
          <p className="card-text">{piloto.equipo.nombre}</p>
        </div>
      </div>
    );
  }
}

Piloto.propType = {
  piloto: PropTypes.object.isRequired
};

const titulo = {
  color: "blue"
};

export default Piloto;
