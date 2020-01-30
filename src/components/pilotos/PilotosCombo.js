import React, { Component } from "react";

import pilotosData from "../../data/pilotos.json";

class PilotosCombo extends Component {
  state = {
    pilotos: pilotosData
  };

  async componentDidMount() {
    const data = pilotosData.filter(
      piloto => piloto.equipo.categoria === this.props.categoria
    );

    this.setState({ pilotos: data });
  }

  render() {
    return (
      <select
        name="piloto"
        className="form-control"
        value={this.props.value}
        onChange={this.props.cambio}
      >
        {this.state.pilotos.map(element => (
          <option key={element.id} value={element.id}>
            {element.nombre} {element.apellido}
          </option>
        ))}
      </select>
    );
  }
}

export default PilotosCombo;
