import React, { Component } from 'react';

export default class CircuitoForm extends Component {

  state = {
    nombre: '',
    longitud: ''
  }

  enviar = (e) => {
    e.preventDefault();
    this.props.addCircuito(this.state.nombre, this.state.longitud);
    this.setState({
      nombre: '',
      longitud: ''
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
        <br/>
        <input 
          type="number" 
          name="longitud"
          placeholder="longitud" 
          onChange={ this.cambio } 
          value={ this.state.longitud }
        />
        <br/>
        <button type="submit" className="bg-primary">Enviar</button>
      </form>
    )
  }
}