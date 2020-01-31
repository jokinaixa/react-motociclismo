import React, { useEffect, useState } from "react";
import axios from "axios";

import Circuito from "./Circuito";

const Circuitos = () => {
  const [personajes, setPersonajes] = useState({ results: [] });
  const [query, setQuery] = useState("");

  const searchCharacters = async () => {
    const res = await axios(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    );
    setPersonajes(res.data);
  };

  useEffect(() => {
    searchCharacters();
  });

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
          placeholder="filtrar"
        />
      </form>
      <br />
      <div className="row row-cols-1 row-cols-md-4">
        {personajes.results.map((personaje, index) => (
          <div className="col mb-3" key={index}>
            <Circuito personaje={personaje} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Circuitos;
