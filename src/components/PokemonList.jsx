import styled from "styled-components";
import PokeCard from "./PokemonCard";
import { MOCK_DATA } from "../shared/MOCK_DATA";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PokeContext } from "./PokemonContext";

const PokemonCardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  border: 5px solid gray;
  margin: 5px;
  gap: 10px;
`;

const PokeCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  text-align: center;
`;

const PokemonList = () => {
  const navigate = useNavigate();
  const mons = MOCK_DATA;
  const goDetail = (mon) => {
    navigate(`/Dex/${mon.id}`);
  };
  const { AddPokemon } = useContext(PokeContext);
  

  return (
    <div>
      <PokemonCardBox>
        {mons.map((mon) => (
          <PokeCardStyle key={mon.id} onClick={() => goDetail(mon)}>
            <PokeCard key={mon.id} mon={mon} />
            <button onClick={(e) => AddPokemon(e, mon)}>내 꼬</button>
          </PokeCardStyle>
        ))}
      </PokemonCardBox>
    </div>
  );
};

export default PokemonList;
