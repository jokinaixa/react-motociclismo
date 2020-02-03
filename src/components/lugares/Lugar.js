import React from "react";
import { Link } from "react-router-dom";

const Lugar = ({ lugar }) => {
  return (
    <div className="card">
      <div className="card-body">
        <Link to={{ pathname: `/lugarFicha/${lugar.id}` }}>{lugar.name}</Link>
      </div>
    </div>
  );
};

export default Lugar;
