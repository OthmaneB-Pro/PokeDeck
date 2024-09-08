import styled from "styled-components";

export default function EmptyPokedex() {
  return (
    <EmptyPokedexStyled>
      Votre Pokedex est vide pour le moment...
    </EmptyPokedexStyled>
  );
}

const EmptyPokedexStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 25px;
  font-family: "Baloo 2", cursive;
`;
