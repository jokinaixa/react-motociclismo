import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Circuito.scss';

class Circuito extends Component {

  StyleLongitud() {
    return {
      color: this.props.circuito.longitud > 5100 ? 'green' : 'red'
    }
  }

  render() {
    const { circuito } = this.props;

    return <li>
      <div className="tarjeta">
        <h2 style={ btnTitulo }>{ circuito.nombre }</h2> 
        <h6 style={ this.StyleLongitud() }>{ circuito.longitud }  metros</h6>
      </div>
    </li>
  }
}

Circuito.propType = {
  circuito: PropTypes.object.isRequired
}

const btnTitulo = {
  fontStyle: 'italic',
  color: 'blue'
}

export default Circuito;
