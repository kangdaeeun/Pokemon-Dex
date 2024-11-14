import React from "react";
import Dashboard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from '../mock';

function Dex() {
    const [selectedPokemons, setSelectedPokemons] = React.useState([]);

  return (
    <div>
      <h1>Pokemon Dex</h1>
      <Dashboard selectedPokemons={selectedPokemons} />
      <PokemonList pokemonData={MOCK_DATA} />
    </div>
  );
}

export default Dex;
