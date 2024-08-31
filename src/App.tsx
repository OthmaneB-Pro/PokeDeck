import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";
import PokedexPage from "./components/pages/pokedex/PokedexPage";
import LoginPage from "./components/pages/login/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={"*"} element={<ErrorPage />} />
      <Route path={"/"} element={<LoginPage />} />
      <Route path={"/pokedex/:username"} element={<PokedexPage />} />
      </Routes>
    </BrowserRouter>
  );
}
