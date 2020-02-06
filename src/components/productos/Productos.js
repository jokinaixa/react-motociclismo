import React, { useEffect, useState } from "react";
import { getCodigos, getFamilias, getProductos } from "./services";

const Productos = () => {
  const formularioClean = { codigo: "X", familia: "X", producto: "X" };

  const [codigos, setCodigos] = useState([]);
  const [familias, setFamilias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [formulario, setFormulario] = useState({ ...formularioClean });

  async function loadFamilias(value) {
    if (value !== "X") {
      const response = await getFamilias(value);
      setFamilias(response.data);
    } else {
      setFamilias([]);
    }
  }

  async function loadProductos(idCodigo, value) {
    if (value !== "X") {
      const response = await getProductos(idCodigo, value);
      setProductos(response.data);
    } else {
      setProductos([]);
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    const formularioNew = { ...formularioClean };

    switch (name) {
      case "codigo":
        loadFamilias(value);
        formularioNew.codigo = e.target.value;
        setFamilias([]);
        setProductos([]);
        break;

      case "familia":
        loadProductos(formulario.codigo, value);
        formularioNew.codigo = formulario.codigo;
        formularioNew.familia = e.target.value;
        setProductos([]);
        break;

      default:
        formularioNew.codigo = formulario.codigo;
        formularioNew.familia = formulario.familia;
        formularioNew.producto = e.target.value;
        break;
    }
    setFormulario(formularioNew);
  };

  const enviar = event => {
    event.preventDefault();
    console.log(formulario);
  };

  useEffect(() => {
    async function loadCodigos() {
      const response = await getCodigos();
      setCodigos(response.data);
    }

    loadCodigos();
  }, []);

  return (
    <div>
      <h1>Servicios</h1>
      <hr />
      <form onSubmit={enviar}>
        <select
          name="codigo"
          className="form-control"
          value={formulario.codigo}
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
          name="familia"
          className="form-control"
          value={formulario.familia}
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
          name="producto"
          className="form-control"
          value={formulario.producto}
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
        <br />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Productos;
