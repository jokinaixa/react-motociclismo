import React, { Component } from "react";

export default class CategoriasCombo extends Component {
  render() {
    return (
      <select
        name="categoria"
        className="form-control"
        value={this.props.value}
        onChange={this.props.cambio}
      >
        {this.props.data.map(element => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    );
  }
}
