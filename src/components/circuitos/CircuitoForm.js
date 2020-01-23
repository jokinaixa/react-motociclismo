import React, { Component } from 'react';
import './CircuitoForm.scss';

export default class CircuitoForm extends Component {

  state = {
    nombre: '',
    distancia: ''
  }

  enviar = (e) => {
    e.preventDefault();
    this.props.addCircuito(this.state.nombre, this.state.distancia);
    this.setState({
      nombre: '',
      distancia: ''
    });
  }

  cambio = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }  
  
  render() {
    return (
      <form onSubmit={ this.enviar }>
        <input 
          type="text" 
          name="nombre"
          placeholder="circuito" 
          onChange={ this.cambio } 
          value={ this.state.nombre }
        />
        <input 
          type="number" 
          name="distancia"
          placeholder="longitud" 
          onChange={ this.cambio } 
          value={ this.state.distancia }
        />
        <button type="submit" className="bg-primary">Enviar</button>
      </form>
    )
  }
}