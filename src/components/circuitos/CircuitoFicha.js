import React, { useEffect, useState } from "react";
import axios from "axios";

import Circuito from "./Circuito";

const CircuitoFicha = props => {
  const [personaje, setPersonaje] = useState({
    name: "",
    species: "",
    gender: ""
  });

  useEffect(() => {
    const { idPersonaje } = props.match.params;

    getPersonaje(idPersonaje);
  }, [props]);

  const getPersonaje = async idPersonaje => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
      .then(res => {
        setPersonaje(res.data);
      });
  };

  return (
    <div className="row">
      <div className="col-4">
        <Circuito personaje={personaje} />
      </div>

      <div className="col-4">
        <form>
          <div className="form-group row">
            <label className="col-3 col-form-label">Species</label>
            <div className="col-9">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={personaje.species}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">gender</label>
            <div className="col-9">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={personaje.gender}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CircuitoFicha;
