import styled from "styled-components";
import Pokedex from "./Pokedex";
import Navbar from "./navbar/Navbar";

export default function PokedexPage() {
  return (
    <PokedexPageStyled>
      <div className="container-pokemon">
        <Navbar />
        <Pokedex />
      </div>
    </PokedexPageStyled>
  );
}

const PokedexPageStyled = styled.div`
  display: flex;
  justify-content: center;
  background: url("/img/pokemon_mignon.jfif") rgba(148, 148, 148, 0.7);
  background-blend-mode: darken;
  background-repeat: space repeat;
  background-attachment: fixed;
  min-height: 100vh;

  .container-pokemon {
    background: white;
    width: 1170px;
    padding: 20px;
  }
`;
