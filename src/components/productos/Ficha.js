import React, { useEffect, useState } from "react";
import { mostrarProducto } from "./services";

const Ficha = ({ referencia }) => {
  const fichaClean = {
    Codigo: "",
    Nomcodi: "",
    Familia: "",
    Nomfami: "",
    Producto: "",
    Nomprod: ""
  };

  const [ficha, setFicha] = useState({ ...fichaClean });

  const modificar = event => {
    setFicha(event.target);
  };

  const handleChange = e => {};

  useEffect(() => {
    async function loadProducto() {
      if (referencia) {
        const response = await mostrarProducto("servicio", referencia);
        setFicha(response.data);
      }
    }

    loadProducto();
  }, [referencia]);

  return (
    <form onSubmit={modificar}>
      <div className="row">
        <div className="col-8">
          <div className="form-row">
            <label for="colFormLabelLg" class="col-2 col-form-label">
              Código
            </label>
            <div className="col-2">
              <input
                type="text"
                name="Codigo"
                className="form-control text-right"
                value={ficha.Codigo}
                readOnly
                placeholder="Código"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="Nomcodi"
                className="form-control"
                value={ficha.Nomcodi}
                onChange={handleChange}
                placeholder="Descripción del código"
              />
            </div>
          </div>

          <br />

          <div className="form-row">
            <label for="colFormLabelLg" class="col-2 col-form-label">
              Familia
            </label>
            <div className="col-2">
              <input
                type="text"
                name="familia"
                className="form-control text-right"
                value={ficha.Familia}
                readOnly
                placeholder="Familia"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="Nomfami"
                className="form-control"
                value={ficha.Nomfami}
                onChange={handleChange}
                placeholder="Descripción de la familia"
              />
            </div>
          </div>

          <br />

          <div className="form-row">
            <label for="colFormLabelLg" class="col-2 col-form-label">
              Servicio
            </label>
            <div className="col-2">
              <input
                type="text"
                name="producto"
                className="form-control text-right"
                value={ficha.Producto}
                readOnly
                placeholder="Producto"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="Nomprod"
                className="form-control"
                value={ficha.Nomprod}
                onChange={handleChange}
                placeholder="Descripción del producto"
              />
            </div>
          </div>
        </div>

        <div className="col-4">foto</div>
      </div>

      <br />

      <div className="row">
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              ficha.codigo === "X" ||
              ficha.familia === "X" ||
              ficha.producto === "X"
                ? "disabled"
                : ""
            }
          >
            Modificar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Ficha;
