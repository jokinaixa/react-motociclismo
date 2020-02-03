import React from "react";
import { Link } from "react-router-dom";

const Personaje = ({ personaje }) => {
  return (
    <div className="card">
      <img
        src={personaje.image}
        alt={personaje.name}
        className="card-img-top"
      />
      <div className="card-body">
        <Link to={{ pathname: `/personajeFicha/${personaje.id}` }}>
          {personaje.name}
        </Link>
      </div>
    </div>
  );
};

export default Personaje;
