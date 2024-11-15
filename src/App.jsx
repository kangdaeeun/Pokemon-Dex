import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail"
import { PokemonProvider } from "./context/PokemonContext";
import "./App.css";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
