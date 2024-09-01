import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { PokemonsType } from "../../../reusable-type/pokemonType";
import { fetchSearchPokemonsName } from "../../../../api/PokemonApi";
import CardPokedex from "../../../reusable-ui/CardPokedex";
import { TbPokeball } from "react-icons/tb";
import { PiPokerChip, PiPokerChipFill } from "react-icons/pi";
import { PokemonContext } from "../../../../context/PokemonContext";
import InputSearch from "./InputSearch";

export default function SearchBar() {
  const [name, setName] = useState("");
  const [resultsApiCall, setResultsApiCall] = useState<PokemonsType | null>(
    null
  );
  const { isShiny, setIsShiny } = useContext(PokemonContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (name.trim().length < 3) {
      setResultsApiCall(null);
      setErrorMessage("");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const debounce = setTimeout(() => {
      fetchSearchPokemonsName(name, setResultsApiCall)
        .then(() => {
          if (
            !resultsApiCall ||
            !resultsApiCall.name ||
            !resultsApiCall.name.fr
          ) {
            setErrorMessage("Aucun Pokémon trouvé");
          }
        })
        .catch((error) => {
          console.error("Error fetching Pokémon:", error);
          setErrorMessage("Une erreur s'est produite lors de la recherche.");
        })
        .finally(() => setIsLoading(false));
    }, 500);

    return () => clearTimeout(debounce);
  }, [name, resultsApiCall]);

  return (
    <SearchBarStyled>
      <InputSearch name={name} setName={setName} />

      <CardSearchResultStyled>
        {isLoading && <p>Recherche en cours...</p>}
        {errorMessage && <p>{errorMessage}</p>}
        {resultsApiCall && resultsApiCall.name && resultsApiCall.name.fr && (
          <CardPokedex
            key={resultsApiCall.pokedex_id}
            numero={resultsApiCall.pokedex_id}
            namePokemon={resultsApiCall.name.fr}
            src={
              isShiny
                ? resultsApiCall.sprites.shiny
                : resultsApiCall.sprites.regular
            }
            alt={resultsApiCall.name.fr}
            typePokemon={resultsApiCall.types.map((type) => type.image)}
            IconPokeball={<TbPokeball />}
            IconShiny={isShiny ? <PiPokerChipFill /> : <PiPokerChip />}
            onShiny={() => {
              setIsShiny(!isShiny);
            }}
            onPokeball={() => {}}
          />
        )}
      </CardSearchResultStyled>
    </SearchBarStyled>
  );
}
const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const CardSearchResultStyled = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #888;
    font-size: 18px;
    margin-top: 20px;
  }
`;
