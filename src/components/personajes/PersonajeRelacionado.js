import React, { useEffect, useState } from "react";
import { getPersonajeByUrl } from "./services";
import { Link } from "react-router-dom";

const PersonajeRelacionado = ({ url }) => {
  const [personaje, setPersonaje] = useState({
    name: "",
    species: "",
    gender: "",
    location: []
  });

  useEffect(() => {
    async function loadPersonaje(url) {
      const response = await getPersonajeByUrl(url);

      if (response.status === 200) {
        setPersonaje(response.data);
      }
    }
    loadPersonaje(url);
  }, [url]);

  return (
    <div className="card">
      <img
        src={personaje.image}
        alt={personaje.name}
        className="card-img-top"
      />
      <div className="card-body">
        <Link to={{ pathname: `/personajeFicha/${personaje.id}` }}>
          {personaje.name}
        </Link>
      </div>
    </div>
  );
};

export default PersonajeRelacionado;
