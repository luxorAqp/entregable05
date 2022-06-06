import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";
const Pokedex = () => {
  const user = useSelector((state) => state.pokemon);
  const [pokemons, setPokemons] = useState([]);

  const [pokemonSearch, setPokemonSearch] = useState("");
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();
  //Api para mostrar todos los pokemones
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      /* .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126") */

      .then((res) => setPokemons(res.data.results));

    //Consumo de API para los tipos de pokemon
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);

  console.log(types);
  const search = () => {
    navigate(`/pokedex/${pokemonSearch}`);
  };

  const filterPokemons = (e) => {
    axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon));
  };
  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Bienvenido {user}</h2>
      <select onChange={filterPokemons}>
        {types.map((type) => (
          <option value={type.url}>{type.name}</option>
        ))}
      </select>
      <div>
        <input
          type="text"
          value={pokemonSearch}
          onChange={(e) => setPokemonSearch(e.target.value)}
          placeholder="Buscar pokemon"
        />
        <button onClick={search}>Buscar</button>
      </div>
      <ul>
        {pokemons.map((pokemon) => (
          //En este caso pokemon puede ser un objeto o un arreglo
          <li>
            <PokemonCard
              //pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon}
              pokemonUrl={
                pokemon.url !== undefined ? pokemon?.url : pokemon.pokemonm?.url
              }
              key={pokemon.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
