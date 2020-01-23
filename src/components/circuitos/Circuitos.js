import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Circuito from './Circuito';

class Circuitos extends Component {

  state = {
    circuitos: [],
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:8080/api/obtenerCircuitos.php')
    const data = await res.json();
    this.setState({ circuitos: data });
  }

  render() {
    return <div>
      <Link to="/">Home</Link><br/>
      <Link to="/pilotos">Pilotos</Link>
      <h1>Circuitos</h1>
      <ul style={ listado }>
        { this.state.circuitos.map(circuito => 
          <Circuito 
            circuito={ circuito } 
            key={ circuito.id }
          />)
        }
      </ul>
    </div>
  }
}

const listado = {
  padding: '0px'
}

export default Circuitos
