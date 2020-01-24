import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Piloto.scss';

class Piloto extends Component {

  render() {
    const { piloto } = this.props;

    return <li>
      <div className="tarjeta">
        <div className="fondoImg"><img src={ piloto.imagen } alt={ piloto.nombre } /></div>
        <h2 style={ btnTitulo }>{ piloto.nombre } { piloto.apellido }</h2> 
      </div>
    </li>
  }
}

Piloto.propType = {
  piloto: PropTypes.object.isRequired
}

const btnTitulo = {
  fontStyle: 'italic',
  color: 'blue'
}

export default Piloto;
