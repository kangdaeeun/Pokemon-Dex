import { createContext, useState } from "react";
import { MOCK_DATA } from "../shared/MOCK_DATA";
const PokeContext = createContext();

const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const AddPokemon = (e, pokemon) => {
    e.preventDefault();
    e.stopPropagation(); // 상위 태그에 이벤트 전파를 막아준다
    const mons = MOCK_DATA;
    const newPokemon = mons.find((mon) => {
      return mon.id === pokemon.id;
    }); // ID에 맞는 포켓몬 찾기
    if (selectedPokemon.some((prevPokemon) => prevPokemon.id === pokemon.id)) {
      alert("내 꼬에 있는 포켓몬이야");
    } else if (selectedPokemon.length >= 6) {
      alert("내 꼬는 6마리가 최대야");
    } else {
      setSelectedPokemon((prevSelected) => [...prevSelected, newPokemon]);
    }
  };

  const removePokemon = (e, id) => {
    e.stopPropagation();
    setSelectedPokemon((prevSelected) =>
      prevSelected.filter((prevPokemon) => prevPokemon.id !== id)
    );
  };
  return (
    <PokeContext.Provider
      value={{
        selectedPokemon,
        removePokemon,
        AddPokemon,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export { PokeContext, PokemonProvider };
