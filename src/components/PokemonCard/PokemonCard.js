import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PokemonCard.css";
const PokemonCard = ({ pokemonUrl }) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemon(res.data));
  }, [pokemonUrl]);
  console.log(pokemon.abilities?.[0].ability);
  return (
    <div
      className="card-container"
      onClick={() => navigate(`/pokedex/${pokemon.id}`)}
    >
      <div className="card-item">
        <h1>{pokemon.name}</h1>
      </div>
      <div className="card-item">
        <img
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt="pokemon"
        />
      </div>
      <div className="card-item">
        {/* <h3>{pokemon.stats[1].base_stat} Attack</h3>
          <h3>{pokemon.stats[2].base_stat} Defense</h3>
          <h3>{pokemon.stats[5].base_stat} Speed</h3> */}
      </div>
    </div>
  );
};

export default PokemonCard;
