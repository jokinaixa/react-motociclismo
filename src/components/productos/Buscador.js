import React, { useEffect, useState } from "react";
import { obtenerCodigos, obtenerFamilias, obtenerProductos } from "./services";

const Buscador = props => {
  const buscadorClean = { Codigo: "X", Familia: "X", Producto: "X" };

  const [codigos, setCodigos] = useState([]);
  const [familias, setFamilias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [buscador, setBuscador] = useState({ ...buscadorClean });

  async function loadFamilias(value) {
    if (value !== "X") {
      const response = await obtenerFamilias("servicio", value);
      setFamilias(response.data);
    } else {
      setFamilias([]);
    }
  }

  async function loadProductos(idCodigo, value) {
    if (value !== "X") {
      const response = await obtenerProductos("servicio", idCodigo, value);
      setProductos(response.data);
    } else {
      setProductos([]);
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    const buscadorNew = { ...buscadorClean };

    switch (name) {
      case "Codigo":
        loadFamilias(value);
        buscadorNew.Codigo = e.target.value;
        setFamilias([]);
        setProductos([]);
        break;

      case "Familia":
        loadProductos(buscador.Codigo, value);
        buscadorNew.Codigo = buscador.Codigo;
        buscadorNew.Familia = e.target.value;
        setProductos([]);
        break;

      default:
        buscadorNew.Codigo = buscador.Codigo;
        buscadorNew.Familia = buscador.Familia;
        buscadorNew.Producto = e.target.value;
        break;
    }

    setBuscador(buscadorNew);
  };

  useEffect(() => {
    async function loadCodigos() {
      const response = await obtenerCodigos("servicio");
      setCodigos(response.data);
    }

    loadCodigos();
  }, []);

  return (
    <form onSubmit={props.buscar}>
      <div className="row">
        <div className="col-9">
          <select
            name="Codigo"
            className="form-control"
            value={buscador.Codigo}
            onChange={handleChange}
          >
            <option value="X">Seleccione un código</option>
            {codigos.map(element => (
              <option key={element.Codigo} value={element.Codigo}>
                {element.Nomcodi}
              </option>
            ))}
          </select>
          <br />
          <select
            name="Familia"
            className="form-control"
            value={buscador.Familia}
            disabled={familias.length === 0 ? "disabled" : ""}
            onChange={handleChange}
          >
            <option value="X">Seleccione una familia</option>
            {familias.map(element => (
              <option key={element.Familia} value={element.Familia}>
                {element.Nomfami}
              </option>
            ))}
          </select>
          <br />
          <select
            name="Producto"
            className="form-control"
            value={buscador.Producto}
            disabled={productos.length === 0 ? "disabled" : ""}
            onChange={handleChange}
          >
            <option value="X">Seleccione un producto</option>
            {productos.map(element => (
              <option key={element.Producto} value={element.Producto}>
                {element.Nomprod}
              </option>
            ))}
          </select>
        </div>

        <div className="col-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              buscador.Codigo === "X" ||
              buscador.Familia === "X" ||
              buscador.Producto === "X"
                ? "disabled"
                : ""
            }
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Buscador;
