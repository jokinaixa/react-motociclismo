import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getPersonaje } from "./services";

import Personaje from "./Personaje";

import obtenerUrl from "../ObtenerIdUrl";

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
  const idLocation = obtenerUrl(personaje.location.url);

  function colorEspecie() {
    return {
      color: personaje.species === "Human" ? "blue" : "red"
    };
  }

  const linkEpisodio = url => {
    if (url) {
      const idEpisodio = obtenerUrl(url);

      return (
        <Link
          to={{ pathname: `/episodioFicha/${idEpisodio}` }}
          className="badge badge-pill badge-info"
        >
          {idEpisodio}
        </Link>
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
    <div className="row">
      <div className="col-4">
        <Personaje personaje={personaje} />
      </div>

      <div className="col-8">
        <TPrincipal>{personaje.name}</TPrincipal>
        <dl className="row">
          <dt className="col-4">Status</dt>
          <dd className="col-8">{personaje.status}</dd>

          <dt className="col-4">Species</dt>
          <dd className="col-8" style={colorEspecie()}>
            {personaje.species}
          </dd>

          <dt className="col-4">Gender</dt>
          <dd className="col-8">{personaje.gender}</dd>
        </dl>
        <br />
        <h3>Residencia</h3>
        <ul>
          <li>
            <Link to={{ pathname: `/lugarFicha/${idLocation}` }}>
              {personaje.location.name}
            </Link>
          </li>
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
  );
};

const TPrincipal = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  color: green;
`;

export default PersonajeFicha;
