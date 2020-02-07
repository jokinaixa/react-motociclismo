import React, { useState } from "react";
import Buscador from "./Buscador";
import Ficha from "./Ficha";

const Productos = () => {
  const [referencia, setReferencia] = useState("");

  const buscar = event => {
    event.preventDefault();

    const codigo = event.target.Codigo.value.toString();
    const familia = event.target.Familia.value.toString();
    const producto = event.target.Producto.value.toString();

    const referencia = codigo + familia + producto;

    setReferencia(referencia);
  };

  return (
    <div>
      <div className="card card mb-3">
        <div className="card-header">
          <h2>Servicios</h2>
        </div>
        <div className="card-body">
          <Buscador buscar={buscar} />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Ficha de Servicios</h2>
        </div>
        <div className="card-body">
          <Ficha referencia={referencia} />
        </div>
      </div>
    </div>
  );
};

export default Productos;
