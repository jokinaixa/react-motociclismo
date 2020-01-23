import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CircuitosTabla.scss';

class CircuitosTabla extends Component {

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
      <table border="1">
        <thead>
          <tr>
            <th>Circuitos</th>
            <th>Longitudes</th>
          </tr>
        </thead>

        <tbody>
          { this.state.circuitos.map(circuito => 
            <tr key={ circuito.id }>
              <td>{ circuito.nombre }</td> 
              <td>{ circuito.longitud } m.</td>
            </tr>
          )}
        </tbody>

        <tfoot>
          <tr><td colSpan="2">TOTAL: { this.state.circuitos.length }</td></tr>
        </tfoot>
      </table>
    </div>
  }
}

export default CircuitosTabla
