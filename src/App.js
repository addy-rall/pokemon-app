import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./pokemoncard";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20"; 

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const fetchPokemonDetails = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        Promise.all(fetchPokemonDetails).then((pokemonData) => {
          setPokemons(pokemonData);
        });
      });
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Try Flipping the Pokémon Card</h1>
      
      <input
        type="text"
        placeholder="Search your Pokémon here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <div className="card-grid">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
