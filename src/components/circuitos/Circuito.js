import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Circuito.scss";

class Circuito extends Component {
  StyleLongitud() {
    return {
      color: this.props.circuito.longitud > 5100 ? "green" : "red"
    };
  }

  render() {
    const { circuito } = this.props;

    return (
      <div className="card">
        <img
          src={circuito.imagen}
          alt={circuito.nombre}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{circuito.nombre}</h5>
          <p className="card-text" style={this.StyleLongitud()}>
            {circuito.longitud} metros
          </p>
        </div>
      </div>
    );
  }
}

Circuito.propType = {
  circuito: PropTypes.object.isRequired
};

export default Circuito;
