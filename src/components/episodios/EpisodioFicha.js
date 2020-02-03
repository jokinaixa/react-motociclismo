import React, { useEffect, useState } from "react";
import { getEpisodio } from "./services";

import PersonajeRelacionado from "../personajes/PersonajeRelacionado";

const PersonajeFicha = props => {
  const [episodio, setEpisodio] = useState({
    name: "",
    episode: "",
    gender: "",
    characters: []
  });

  useEffect(() => {
    async function loadEpisodio(idEpisodio) {
      const response = await getEpisodio(idEpisodio);

      if (response.status === 200) {
        setEpisodio(response.data);
      }
    }

    loadEpisodio(props.match.params.idEpisodio);
  }, [props]);

  return (
    <div>
      <h1>{episodio.name}</h1>
      <div className="row">
        <div className="col-8">
          <dl className="row">
            <dt className="col-4">Episode</dt>
            <dd className="col-8">{episodio.episode}</dd>
          </dl>
        </div>
      </div>
      <br />
      <h3>Reparto</h3>
      <hr />
      <div className="row row-cols-1 row-cols-4">
        {episodio.characters.map((element, index) => (
          <div className="col mb-3" key={index}>
            <PersonajeRelacionado url={element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonajeFicha;
