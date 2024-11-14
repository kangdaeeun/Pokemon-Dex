import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Pokemon Dex</h1>
      <Link to="/dex">
        <button>포켓몬 도감 시작하기</button>
      </Link>
    </div>
  );
}

export default Home;
