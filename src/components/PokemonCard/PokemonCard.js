import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PokemonCard = ({ pokemonUrl }) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemon(res.data));
  }, [pokemonUrl]);
  return (
    <div onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt=""
      />
    </div>
  );
};

export default PokemonCard;
