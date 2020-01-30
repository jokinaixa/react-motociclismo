import React, { Component } from "react";

export default class TareasForm extends Component {
  state = {
    titulo: "",
    descripcion: ""
  };

  enviar = e => {
    e.preventDefault();
    this.props.addTarea(this.state.titulo, this.state.descripcion);
    this.setState({
      titulo: "",
      descripcion: ""
    });
  };

  cambio = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.enviar}>
        <input
          type="text"
          name="titulo"
          placeholder="titulo"
          onChange={this.cambio}
          value={this.state.titulo}
        />
        <input
          type="number"
          name="descripcion"
          placeholder="descripcion"
          onChange={this.cambio}
          value={this.state.descripcion}
        />
        <button type="submit" className="bg-primary">
          Enviar
        </button>
      </form>
    );
  }
}
