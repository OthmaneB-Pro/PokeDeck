import styled from "styled-components";
import { CardPokedexType } from "../reusable-type/pokemonType";
import ImageSection from "../pages/pokedex/cardPokemon/ImageSection";
import TextSection from "../pages/pokedex/cardPokemon/TextSection";

export default function CardPokedex({
  src,
  alt,
  numero,
  namePokemon,
  typePokemon,
  onDetails,
}: CardPokedexType) {
  return (
    <CardPokedexStyled onClick={() => onDetails(numero)}>
      <div className="image">
        <ImageSection src={src} alt={alt} />
      </div>
      <TextSection
        numero={numero}
        namePokemon={namePokemon}
        typePokemon={typePokemon}
      />
    </CardPokedexStyled>
  );
}

const CardPokedexStyled = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .image {
    border-radius: 10px;
    height: 250px;
    background: #dddddd;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    overflow: hidden;
  }
`;
