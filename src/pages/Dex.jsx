import React from "react";
import Dashboard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";

function Dex() {
  return (
    <div>
      <h1>Pokemon Dex</h1>
      <Dashboard />
      <PokemonList />
    </div>
  );
}

export default Dex;
