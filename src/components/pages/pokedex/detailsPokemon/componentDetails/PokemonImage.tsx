import styled from "styled-components";
import { PokemonImageType } from "./typeComponents";

export default function PokemonImage({ src, alt }: PokemonImageType) {
  return <ImageStyled src={src} alt={alt} />;
}

const ImageStyled = styled.img`
  width: 250px;
  margin-bottom: 10px;
`;
