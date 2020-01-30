import React, { Component } from "react";

import TareasForm from "./Tareas";
import Tarea from "./Tarea";

import tareasData from "../../data/tareas.json";

class Tareas extends Component {
  state = {
    tareas: []
  };

  componentDidMount() {
    this.setState({ tareas: tareasData });
  }

  addTarea(titulo, description) {
    const nuevaTarea = {
      titulo: titulo,
      descripcion: description,
      id: this.state.tareas.length
    };
    this.setState({ tareas: [...this.tareas, nuevaTarea] });
  }

  deleteTarea() {}

  render() {
    const tareas = this.state.tareas;

    return (
      <div>
        <h1>{tareas.length} Tareas</h1>
        <hr />
        <TareasForm addTarea={this.addTarea} deleteTarea={this.deleteTarea} />
        <br />
        {tareas.map(tarea => (
          <p key={tarea.id}>
            <Tarea tarea={tarea} />
          </p>
        ))}
      </div>
    );
  }
}

export default Tareas;
