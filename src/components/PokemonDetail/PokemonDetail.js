import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const PokemonDetail = () => {
  //Usamos useParams para acceder al dato que esta en la URL
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);

  return (
    <div>
      <h1>Pokemon Detail</h1>
      <p>
        Accediendo al personaje con id: <b>{id}</b>
      </p>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt=""
      />
    </div>
  );
};

export default PokemonDetail;
