import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Piloto from './Piloto';

class Pilotos extends Component {

  state = {
    pilotos: [],
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:8080/api/obtenerPilotos.php')
    const data = await res.json();
    this.setState({ pilotos: data });
  }

  render() {
    return <div>
      <Link to="/">Home</Link><br/>
      <Link to="/circuitos">Circuitos</Link>
      <h1>Pilotos</h1>
      <ul style={ listado }>
      { this.state.pilotos.map(piloto => 
        <Piloto 
          piloto={ piloto } 
          key={ piloto.id }
        />)
      }
      </ul>
    </div>
  }
}

const listado = {
  padding: '0px'
}

export default Pilotos
