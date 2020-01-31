import React, { useState } from "react";

import Pokemon from "./Pokemon";

const RandomPokemon = () => {
  const [idPokemon, setPokemon] = useState(1);

  const handleClick = () => {
    setPokemon(Math.floor(Math.random() * 100 + 1));
  };

  return (
    <div>
      <Pokemon IdPokemon={idPokemon} />
      <button onClick={handleClick}>Cambia Pokemon</button>
    </div>
  );
};

export default RandomPokemon;
