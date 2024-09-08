import { useContext } from "react";
import { PokemonContext } from "../../../../context/PokemonContext";
import Overlay from "../detailsPokemon/Overlay";
import CloseButton from "../detailsPokemon/componentDetails/CloseButton";
import styled from "styled-components";
import MiniCard from "./MiniCard";

export default function MyPokedexPage() {
  const { setIsMyPokedex } = useContext(PokemonContext);
  return (
    <>
      <Overlay />
      <MyPokedexStyled>
        <div className="card">
          <MiniCard src="oo" alt="MiniCard" />
          <MiniCard src="oo" alt="MiniCard" />
          <MiniCard src="oo" alt="MiniCard" />
          <MiniCard src="oo" alt="MiniCard" />
        </div>
        <CloseButton label="Close" onClick={() => setIsMyPokedex(false)} />
      </MyPokedexStyled>
    </>
  );
}

const MyPokedexStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f9f9f9;
  width: 900px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1000;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;
