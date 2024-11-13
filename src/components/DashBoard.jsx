import styled from "styled-components";
import PokeballImage from "../Images/1.png";
import { useContext } from "react";
import { PokeContext } from "./PokemonContext";

const DashBoardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  border: 5px solid orange;
  margin: 5px;
`;

const DashBoardCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  text-align: center;
`;

const DefaultImg = styled.img`
  width: 100px;
  height: 100px;
`;

const DeleteButton = styled.button`
  margin-top: 5px;
`;

const DivStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DashBoard = () => {
  const { selectedPokemon, removePokemon } = useContext(PokeContext);
  return (
    <DashBoardBox>
      <h1>넌 내 꺼야!!</h1>
      <DivStyle>
        {Array(6)
          .fill()
          .map((_, id) => (
            <DashBoardCard key={id}>
              {selectedPokemon[id] ? (
                <>
                  <img
                    src={selectedPokemon[id].img_url}
                    alt={selectedPokemon[id].korean_name}
                  />
                  <p>{selectedPokemon[id].korean_name}</p>
                  <DeleteButton
                    onClick={() => removePokemon(selectedPokemon[id].id)}
                  >
                    삭제
                  </DeleteButton>
                </>
              ) : (
                <DefaultImg src={PokeballImage} alt="포켓볼" />
              )}
            </DashBoardCard>
          ))}
      </DivStyle>
    </DashBoardBox>
  );
};

export default DashBoard;
