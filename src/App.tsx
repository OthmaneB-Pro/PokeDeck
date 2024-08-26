import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/pages/loginForm/LoginForm";
import ErrorPage from "./components/pages/error/ErrorPage";
import Pokedex from "./components/pages/pokedex/Pokedex";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={"*"} element={<ErrorPage />} />
      <Route path={"/"} element={<LoginForm />} />
      <Route path={"/pokedex/:username"} element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}
