import React, { Component } from "react";

export default class CircuitosCombo extends Component {
  render() {
    return (
      <select
        name="circuito"
        className="form-control"
        value={this.props.value}
        onChange={this.props.cambio}
      >
        {this.props.data.map(element => (
          <option key={element.id} value={element.id}>
            {element.nombre}
          </option>
        ))}
      </select>
    );
  }
}
