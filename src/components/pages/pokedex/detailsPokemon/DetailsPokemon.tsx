import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../../context/PokemonContext";
import { fetchSearchPokemonsName } from "../../../../api/PokemonApi";
import { PokemonsType } from "../../../reusable-type/pokemonType";
import { removeAccents } from "../../../../utils/functionPokemon";
import { PiPokerChip, PiPokerChipFill } from "react-icons/pi";
import Loading from "./Loading";
import Overlay from "./Overlay";
import CloseButton from "./CloseButton";

export default function DetailsPokemon() {
  const { setIsDetailsPokemon, pokemons, pokemonId } =
    useContext(PokemonContext);
  const [resultsApiCallWithName, setResultsApiCallWithName] =
    useState<PokemonsType | null>(null);
  const PokemonName = removeAccents(pokemons[pokemonId].name.fr);
  const [isRegular, setIsRegular] = useState(true);

  useEffect(() => {
    fetchSearchPokemonsName(PokemonName, setResultsApiCallWithName);
  }, [PokemonName]);

  return (
    <>
      <Overlay />
      <DetailsPokemonStyled>
        {resultsApiCallWithName ? (
          <>
            <PokemonImage
              src={
                isRegular
                  ? resultsApiCallWithName.sprites.regular
                  : resultsApiCallWithName.sprites.shiny
              }
              alt={`${resultsApiCallWithName.name.fr}`}
            />
            <PokemonNameStyled>{resultsApiCallWithName.name.fr}</PokemonNameStyled>
            <ToggleButton onClick={() => setIsRegular(!isRegular)}>
              {isRegular ? <PiPokerChip /> : <PiPokerChipFill />}
            </ToggleButton>
            <Stats>
              <p>HP: {resultsApiCallWithName.stats.hp}</p>
              <p>ATK: {resultsApiCallWithName.stats.atk}</p>
              <p>DEF: {resultsApiCallWithName.stats.def}</p>
              <p>Sp. ATK: {resultsApiCallWithName.stats.spe_atk}</p>
              <p>Sp. DEF: {resultsApiCallWithName.stats.spe_def}</p>
              <p>VIT: {resultsApiCallWithName.stats.vit}</p>
              <p>Taille: {resultsApiCallWithName.height}</p>
              <p>Poids: {resultsApiCallWithName.weight}</p>
            </Stats>
            <Types>
              {resultsApiCallWithName.types.map((img, index) => (
                <TypeImage key={index} src={img.image} alt={img.name} />
              ))}
            </Types>
          </>
        ) : (
          <Loading/>
        )}
        <CloseButton onClick={() => setIsDetailsPokemon(false)} label="Close" />
      </DetailsPokemonStyled>
    </>
  );
}

const DetailsPokemonStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f9f9f9;
  width: 700px;
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
`;

const PokemonImage = styled.img`
  width: 250px;
  margin-bottom: 10px;
`;

const PokemonNameStyled = styled.h2`
  font-size: 28px;
  margin: 10px 0;
  color: #333;
  text-align: center;
`;

const ToggleButton = styled.button`
  background-color: #ffcc01;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  p {
    flex: 1 1 45%;
    margin: 10px 0;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

const Types = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 60px;
    height: 60px;
    margin: 0 10px;
  }
`;

const TypeImage = styled.img`
  width: 50px;
  height: 50px;
`;
