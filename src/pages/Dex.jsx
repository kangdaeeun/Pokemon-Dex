import React from "react";
import Dashboard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
  const [selectedPokemons, setSelectedPokemons] = React.useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemons.find((e) => e.id === pokemon.id)) {
      return alert("이미 선택된 포켓몬이야!!");
    }
    if (selectedPokemons.length >= 6) {
      return alert("6마리가 최대야");
    }
    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  const removePokemon = (pokemon) => {
    const updatedPokemons = selectedPokemons.filter((e) => e.id !== pokemon.id);
    setSelectedPokemons(updatedPokemons);
  };

  return (
    <div>
      <h1>Pokemon Dex</h1>
      <Dashboard
        selectedPokemons={selectedPokemons}
        removePokemon={removePokemon}
      />
      <PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
