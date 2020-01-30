import React, { Component } from "react";
import PropTypes from "prop-types";

class Tarea extends Component {
  render() {
    const { tarea } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {tarea.posicion} - {tarea.piloto.nombre} {tarea.piloto.apellido}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {tarea.piloto.equipo.nombre} metros
          </h6>
          <button
            className="btn btn-danger"
            onClick={this.props.deleteTarea.bind(this, tarea.id)}
          >
            borrar
          </button>
        </div>
      </div>
    );
  }
}

Tarea.propType = {
  tarea: PropTypes.object.isRequired
};

export default Tarea;
