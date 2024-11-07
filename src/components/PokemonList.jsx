import styled from "styled-components";
// import PokemonCard from "./PokemonCard";
import { MOCK_DATA } from "../shared/MOCK_DATA";
import PokeCard from "./PokemonCard";

const PokemonCardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  border: 5px solid gray;
  margin: 5px;
`;

const PokemonList = () => {
  const AddPokemon = (e) => {
    e.preventDefault();
    const handleSubmit = mons.map((mon) => {
      if (mon.id === id) {
        const getPokemon = [...mon]
      }
    })
  }
const text = mon
  return (
    <>
      <PokemonCardBox>
        {MOCK_DATA.map((mon) => (
          <PokeCard mon={mon} />
        ))}
      </PokemonCardBox>
    </>
  );
};

export default PokemonList;
