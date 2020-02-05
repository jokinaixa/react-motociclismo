import React, { useEffect, useState } from "react";
import { getCodigos, getFamilias, getProductos } from "./services";

const Productos = () => {
  const [codigo, setCodigo] = useState(0);
  const [codigos, setCodigos] = useState([]);
  const [familias, setFamilias] = useState([]);
  const [productos, setProductos] = useState([]);

  async function loadFamilias(idCodigo) {
    setCodigo(idCodigo);
    const resFamilias = await getFamilias(idCodigo);
    setFamilias(resFamilias.data);
    setProductos([]);
  }

  async function loadProductos(idCodigo, idFamilia) {
    const resProductos = await getProductos(idCodigo, idFamilia);
    setProductos(resProductos.data);
  }

  useEffect(() => {
    async function loadCodigos() {
      const resCodigos = await getCodigos();
      setCodigos(resCodigos.data);
      setFamilias([]);
      setProductos([]);
    }

    loadCodigos();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <hr />
      <select
        name="codigo"
        className="form-control"
        onChange={e => {
          loadFamilias(e.target.value);
        }}
      >
        <option key="X">seleccione un codigo</option>
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
        onChange={e => {
          loadProductos(codigo, e.target.value);
        }}
      >
        {familias.map(element => (
          <option key={element.Familia} value={element.Familia}>
            {element.Nomfami}
          </option>
        ))}
      </select>
      <br />
      <select name="producto" className="form-control">
        {productos.map(element => (
          <option key={element.Producto} value={element.Producto}>
            {element.Nomprod}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Productos;
