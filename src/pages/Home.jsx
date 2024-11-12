import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeCss = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

`

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeCss>
      <button
        onClick={() => {
          navigate("/Dex");
        }}
      >
        포켓몬 도감 시작하기
      </button>
    </HomeCss>
  );
};

export default Home;
