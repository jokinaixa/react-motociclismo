import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPersonaje } from "./services";

import Personaje from "./Personaje";

const PersonajeFicha = props => {
  const [personaje, setPersonaje] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    location: [],
    episode: []
  });

  function colorEspecie() {
    return {
      color: personaje.species === "Human" ? "blue" : "red"
    };
  }

  const linkEpisodio = url => {
    console.log("linkEpisodio");

    const arrayDeCadenas = url.split("/");
    const idEpisodio = arrayDeCadenas.slice(-1);

    console.log("linkEpisodio: " + idEpisodio);

    return (
      <Link
        to={{ pathname: `/episodioFicha/${idEpisodio}` }}
        className="badge badge-pill badge-info"
      >
        {idEpisodio}
      </Link>
    );
  };

  const linkLugar = campo => {
    console.log("linkLugar");

    if (campo.url) {
      const arrayDeCadenas = campo.url.split("/");
      const idLugar = arrayDeCadenas.slice(-1);

      console.log("linkLugar: " + idLugar);

      return (
        <Link to={{ pathname: `/lugarFicha/${idLugar}` }}>{campo.name}</Link>
      );
    }
  };

  useEffect(() => {
    async function loadPersonaje(idPersonaje) {
      const response = await getPersonaje(idPersonaje);

      if (response.status === 200) {
        setPersonaje(response.data);
      }
    }

    loadPersonaje(props.match.params.idPersonaje);
  }, [props]);

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <Personaje personaje={personaje} />
        </div>

        <div className="col-8">
          <h1>{personaje.name}</h1>
          <dl className="row">
            <dt className="col-4">Status</dt>
            <dd className="col-8">{personaje.status}</dd>

            <dt className="col-4">Species</dt>
            <dd className="col-8">{personaje.species}</dd>

            <dt className="col-4">Gender</dt>
            <dd className="col-8" style={colorEspecie()}>
              {personaje.gender}
            </dd>
          </dl>
          <br />
          <h3>Residencia</h3>
          <ul>
            <li>{linkLugar(personaje.location)}</li>
          </ul>
          <br />
          <h3>Episodios</h3>
          <ul className="list-inline">
            {personaje.episode.map((url, index) => (
              <li className="list-inline-item" key={index}>
                {linkEpisodio(url)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonajeFicha;
