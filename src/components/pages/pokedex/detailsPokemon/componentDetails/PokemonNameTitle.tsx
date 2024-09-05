import styled from "styled-components";
import { PokemonNameType } from "./typeComponents";

export default function PokemonNameTitle({ name }: PokemonNameType) {
  return <PokemonNameStyled>{name}</PokemonNameStyled>;
}

const PokemonNameStyled = styled.h2`
  font-size: 28px;
  margin: 10px 0;
  color: #333;
  text-align: center;
`;
