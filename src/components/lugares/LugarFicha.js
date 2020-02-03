import React, { useEffect, useState } from "react";
import { getLugar } from "./services";

import PersonajeRelacionado from "../personajes/PersonajeRelacionado";

const LugarFicha = props => {
  const [lugar, setLugar] = useState({
    name: "",
    type: "",
    dimension: "",
    residents: []
  });

  useEffect(() => {
    async function loadLugar(idLugar) {
      const response = await getLugar(idLugar);

      if (response.status === 200) {
        setLugar(response.data);
      }
    }

    loadLugar(props.match.params.idLugar);
  }, [props]);

  return (
    <div>
      <h1>{lugar.name}</h1>
      <div className="row">
        <div className="col-8">
          <dl className="row">
            <dt className="col-4">Type</dt>
            <dd className="col-8">{lugar.type}</dd>

            <dt className="col-4">Dimension</dt>
            <dd className="col-8">{lugar.dimension}</dd>
          </dl>
        </div>
      </div>
      <br />
      <h3>Residentes</h3>
      <hr />
      <div className="row row-cols-1 row-cols-4">
        {lugar.residents.map((element, index) => (
          <div className="col mb-3" key={index}>
            <PersonajeRelacionado url={element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LugarFicha;
