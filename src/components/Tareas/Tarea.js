import React, { Component } from "react";
import PropTypes from "prop-types";

class Tarea extends Component {
  render() {
    const { tarea } = this.props;

    return (
      <div>
        {tarea.titulo} - {tarea.descripcion}
        <button
          className="btn btn-danger"
          onClick={tarea.deleteTarea.bind(this, tarea.id)}
        >
          borrar
        </button>
      </div>
    );
  }
}

Tarea.propType = {
  circuito: PropTypes.object.isRequired
};

export default Tarea;
