import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PilotosTabla.scss';

class PilotosTabla extends Component {

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
      <table border="1">
        <thead>
          <tr>
            <th>Pilotos</th>
            <th>País</th>
          </tr>
        </thead>

        <tbody>
          { this.state.pilotos.map(piloto => 
            <tr key={ piloto.id }>
              <td>{ piloto.nombre } { piloto.apellido }</td> 
              <td>{ piloto.pais }</td>
            </tr>
          )}
        </tbody>

        <tfoot>
          <tr><td colSpan="2">TOTAL: { this.state.pilotos.length }</td></tr>
        </tfoot>
      </table>
    </div>
  }
}

export default PilotosTabla
