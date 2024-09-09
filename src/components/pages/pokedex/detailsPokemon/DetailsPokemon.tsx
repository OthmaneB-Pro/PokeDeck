import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../../context/PokemonContext";
import { fetchSearchPokemonsName } from "../../../../api/PokemonApi";
import { PokemonsType } from "../../../reusable-type/pokemonType";
import {
  calculateGlobalId,
  removeAccents,
} from "../../../../utils/functionPokemon";
import Loading from "./componentDetails/Loading";
import Overlay from "./Overlay";
import CloseButton from "../../../reusable-ui/CloseButton";
import PokemonImage from "./componentDetails/PokemonImage";
import PokemonNameTitle from "./componentDetails/PokemonNameTitle";
import ToggleButton from "./componentDetails/ToggleButton";
import Stats from "./componentDetails/Stats";
import Types from "./componentDetails/Types";

export default function DetailsPokemon() {
  const {
    setIsDetailsPokemon,
    pokemons,
    pokemonId,
    onAddFavorite,
    myPokedex,
    generation,
  } = useContext(PokemonContext);
  const [resultsApiCallWithName, setResultsApiCallWithName] =
    useState<PokemonsType | null>(null);
  const [isRegular, setIsRegular] = useState(true);

  const pokemon = pokemons.find(
    (poke) => calculateGlobalId(poke.pokedex_id, generation) === pokemonId + 1
  );
  const PokemonName = removeAccents(pokemon ? pokemon.name.fr : "");

  const isFavorite = myPokedex.some((poke) => poke.name.fr === PokemonName);

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
              alt={resultsApiCallWithName.name.fr}
            />
            <PokemonNameTitle name={resultsApiCallWithName.name.fr} />
            <ToggleButton
              isRegular={isRegular}
              onRegular={() => setIsRegular(!isRegular)}
              isFavorite={isFavorite}
              onHeart={() => onAddFavorite(resultsApiCallWithName)}
            />
            <Stats
              stats={resultsApiCallWithName.stats}
              height={resultsApiCallWithName.height}
              weight={resultsApiCallWithName.weight}
            />
            <Types types={resultsApiCallWithName.types} />
          </>
        ) : (
          <Loading />
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
  z-index: 1001;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 680px) {
    width: 300px;
  }
`;
