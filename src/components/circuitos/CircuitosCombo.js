import React, { Component } from 'react';
import './CircuitosCombo.scss';

export default class CircuitosCombo extends Component {
  render() {
    return(
      <select>
        { this.props.circuitos.map(circuito => 
          <option key={ circuito.id } value={ circuito.id }>{ circuito.nombre }</option>
        )}
      </select>
    )
  }
}