import React, { useEffect, useState } from "react";
import axios from "axios";

import useListenResize from "./resize";

const Pokemon = ({ IdPokemon }) => {
  const [pokemon, changePokemon] = useState(undefined);

  useEffect(() => {
    getPokemon();
  });

  const height = useListenResize();

  const getPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${IdPokemon}`).then(res => {
      changePokemon(res.data);
    });
  };

  if (pokemon === undefined) return null;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} height={height} alt="" />
    </div>
  );
};

export default Pokemon;
