import styled from "styled-components";
import PokeCard from "./PokemonCard";
import { MOCK_DATA } from "../shared/MOCK_DATA";
import { useNavigate } from "react-router-dom";

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

const PokemonList = ({AddPokemon, }) => {
  const navigate = useNavigate();
  const mons = MOCK_DATA;

  return (
    <div>
      <PokemonCardBox>
        {mons.map((mon) => (
          <PokeCardStyle key={mon.id}>
            <PokeCard key={mon.id} mon={mon} />
            <button onClick={(e) => AddPokemon(e, mon)}>내 꼬</button>
            <button
        onClick={() => {
          navigate(`/Dex/${mon.id}`);
        }}
      >
        상세페이지
      </button>
          </PokeCardStyle>
        ))}
      </PokemonCardBox>
    </div>
  );
};

export default PokemonList;
