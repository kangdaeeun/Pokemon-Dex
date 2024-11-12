import { useNavigate } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";
import { MOCK_DATA } from "../shared/MOCK_DATA";

const Dex = () => {
  const navigate = useNavigate();
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const mons = MOCK_DATA; // `mons`를 MOCK_DATA로 정의

  const AddPokemon = (e, pokemon) => {
    e.preventDefault();
    const newPokemon = mons.find((mon) => mon.id === pokemon.id); // ID에 맞는 포켓몬 찾기
    if (selectedPokemon.length >= 6) {
      alert("내 꼬는 6마리가 최대야");
    } else if (
      selectedPokemon.some((prevPokemon) => prevPokemon.id === pokemon.id)
    ) {
      alert("내 꼬에 있는 포켓몬이야");
    } else {
      setSelectedPokemon((prevSelected)=>[...prevSelected, newPokemon]);
    }
  };

  const removePokemon = (id) => {
    setSelectedPokemon((prevSelected) =>
      prevSelected.filter((prevPokemon) => prevPokemon.id !== id)
    );
  };

  const DetailPokemon = () => {
    
  }

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <DashBoard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList selectedPokemon={selectedPokemon} AddPokemon={AddPokemon} />
    </>
  );
};

export default Dex;
