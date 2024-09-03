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
  IconPokeball,
  IconShiny,
  onShiny,
  onPokeball,
  onDetails,
}: CardPokedexType) {
  return (
    <CardPokedexStyled onClick={() => onDetails(numero)}>
      <div className="image">
        <ImageSection src={src} alt={alt} />
        <div className="button-pokemon">
          <button onClick={onPokeball}>{IconPokeball && IconPokeball}</button>
          <button onClick={onShiny}>{IconShiny && IconShiny}</button>
        </div>
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

    .button-pokemon {
      margin-left: 75px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 50px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      position: relative;
      transition: background-color 0.3s ease;

      button {
        background-color: white;
        border: none;
        cursor: pointer;
        transition: transform 0.3s ease, background-color 0.3s ease;

        svg {
          width: 20px;
          height: auto;
        }
      }
    }
  }
`;
