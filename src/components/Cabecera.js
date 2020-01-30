import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cabecera extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/circuitos" className="nav-link">
                Circuitos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/equipos" className="nav-link">
                Equipos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pilotos" className="nav-link">
                Pilotos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Cabecera;
