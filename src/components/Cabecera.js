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
              <Link to="/personajes" className="nav-link">
                Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lugares" className="nav-link">
                Lugares
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hooks" className="nav-link">
                Hooks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Cabecera;
