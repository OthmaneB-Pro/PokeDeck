import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../../context/PokemonContext";
import { fetchSearchPokemonsName } from "../../../../api/PokemonApi";
import { PokemonsType } from "../../../reusable-type/pokemonType";
import { removeAccents } from "../../../../utils/functionPokemon";

export default function DetailsPokemon() {
  const { setIsDetailsPokemon, pokemons, pokemonId } =
    useContext(PokemonContext);
  const [resultsApiCallWithName, setResultsApiCallWithName] =
    useState<PokemonsType | null>(null);
  const PokemonName = removeAccents(pokemons[pokemonId].name.fr);

  useEffect(() => {
    fetchSearchPokemonsName(PokemonName, setResultsApiCallWithName);
    console.log(PokemonName);
  }, [PokemonName]);

  return (
    <>
      <Overlay />
      <DetailsPokemonStyled>
        {resultsApiCallWithName && resultsApiCallWithName ? (
          <>
            <img
              src={resultsApiCallWithName.sprites.regular}
              alt={`${resultsApiCallWithName.name.fr}`}
            />
            <p>{resultsApiCallWithName.pokedex_id}</p>
            <p>{resultsApiCallWithName.name.fr}</p>
          </>
        ) : (
          "Chargement en cours..."
        )}
        <button onClick={() => setIsDetailsPokemon(false)}>Close</button>
      </DetailsPokemonStyled>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const DetailsPokemonStyled = styled.div`
  position: fixed;
  margin-left: 200px;
  margin-bottom: 300px;
  background-color: white;
  width: 720px;
  height: 650px;
  z-index: 1000;
  padding: 20px;
  border: 1px solid black;
  border-radius: 15px;

  img {
    width: 200px;
  }
`;
