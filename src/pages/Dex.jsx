import { useNavigate } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
        <DashBoard />
        <PokemonList />
    </>
  );
};

export default Dex;
