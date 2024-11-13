import { PokemonProvider } from "./components/PokemonContext";
import Router from "./shared/Router";


const App = () => {
  
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
};

export default App;
