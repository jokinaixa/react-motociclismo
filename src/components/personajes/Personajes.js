import React, { useEffect, useState } from "react";
import { getPersonajes } from "./services";

import Personaje from "./Personaje";

import peliculas from "../../data/prueba.json";

const Personajes = () => {
  const [personajes, setPersonajes] = useState({ results: [] });
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState("All");

  const genderData = ["All", "female", "male", "genderless", "unknown"];

  useEffect(() => {
    async function loadPersonajes(query, gender) {
      const response = await getPersonajes(query, gender);

      if (response.status === 200) {
        setPersonajes(response.data);
      }
    }

    loadPersonajes(query, gender);
  }, [query, gender]);

  return (
    <div>
      <h1>{personajes.results.length} Personajes</h1>
      <hr />
      <form>
        <input
          value={query}
          type="text"
          className="form-control"
          onChange={e => setQuery(e.target.value)}
          placeholder="buscador por nombre..."
        />
        <br />
        <ul className="nav nav-pills">
          {genderData.map((element, index) => (
            <li className="nav-item" key={index}>
              <a
                className={element === gender ? "nav-link active" : "nav-link"}
                href="false"
                onClick={e => {
                  e.preventDefault();
                  setGender(element);
                }}
              >
                {element}
              </a>
            </li>
          ))}
        </ul>
      </form>
      <br />
      <div className="row row-cols-1 row-cols-md-4">
        {personajes.results.map((personaje, index) => (
          <div className="col mb-3" key={index}>
            <Personaje personaje={personaje} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personajes;
