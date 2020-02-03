import React, { useEffect, useState } from "react";
import { getLugares } from "./services";

import Lugar from "./Lugar";

const Lugares = () => {
  const [personajes, setLugares] = useState({ results: [] });
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function loadLugares(query) {
      const response = await getLugares(query);

      if (response.status === 200) {
        setLugares(response.data);
      }
    }

    loadLugares(query);
  }, [query]);

  return (
    <div>
      <h1>{personajes.results.length} Lugares</h1>
      <hr />
      <form>
        <input
          value={query}
          type="text"
          className="form-control"
          onChange={e => setQuery(e.target.value)}
          placeholder="buscador por nombre..."
        />
      </form>
      <br />
      <div className="row row-cols-1 row-cols-md-4">
        {personajes.results.map((lugar, index) => (
          <div className="col mb-3" key={index}>
            <Lugar lugar={lugar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lugares;
