import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pokedex from "./components/Pokedex/Pokedex";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import UserLogin from "./components/UserLogin/UserLogin";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
