import styled from "styled-components";
import PokeballImage from "../Images/1.png";
import { useContext } from "react";
import { PokeContext } from "./PokemonContext";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const goDetail = (mon) => {
    navigate(`/Dex/${mon.id}`);
  };
  return (
    <DashBoardBox>
      <h1>넌 내 꺼야!!</h1>
      <DivStyle>
        {Array(6)
          .fill()
          .map((_, index) => {
            const myCard = selectedPokemon[index];
            return (
              <DashBoardCard key={index} onClick={() => goDetail(myCard.id)}>
                {myCard ? (
                  <>
                    <img src={myCard.img_url} alt={myCard.korean_name} />
                    <p>{myCard.korean_name}</p>
                    <DeleteButton onClick={(e) => removePokemon(e, myCard.id)}>
                      삭제
                    </DeleteButton>
                  </>
                ) : (
                  <DefaultImg src={PokeballImage} alt="포켓볼" />
                )}
              </DashBoardCard>
            );
          })}
      </DivStyle>
    </DashBoardBox>
  );
};

export default DashBoard;
