import styled from "styled-components";
import { MOCK_DATA } from "../shared/MOCK_DATA";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetailTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 50px;
`;

const PokemonDetailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 650px;
`;

const PokemonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 `id` 가져오기
  const mon = MOCK_DATA.find((mon) => mon.id === Number(id)); // 해당 `id`로 포켓몬 찾기

  if (!mon) {
    return <div>그런 포켓몬은 없다옹~</div>;
  }

  return (
    <>
      <PokemonDetailTitle>PokemonDetail</PokemonDetailTitle>
      <PokemonDetailBox key={mon.id}>
        <img src={mon.img_url} alt={mon.korean_name} />
        <p>No. {mon.id}</p>
        <p>{mon.korean_name}</p>
        <p>{mon.description}</p>
        <button
          onClick={() => {
            navigate("/Dex");
          }}
        >
          돌아가기
        </button>
      </PokemonDetailBox>
    </>
  );
};

export default PokemonDetail;
