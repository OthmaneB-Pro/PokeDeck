import styled from "styled-components";
import { useContext, useEffect } from "react";
import CardPokedex from "../../../reusable-ui/CardPokedex";
import { fetchPokemons } from "../../../../api/PokemonApi";
import GenerationPokemon from "./../pokemonSort/GenerationPokemon";
import TitlePokedex from "./TitlePokedex";
import SearchBar from "./../search/SearchBar";
import { PokemonContext } from "../../../../context/PokemonContext";
import ScrollToTopButton from "./buttonScrollTop/ScrollToTopButton";

export default function Pokedex() {
  const { pokemons, setPokemons, handleDetails, generation, setGeneration } =
    useContext(PokemonContext);

  useEffect(() => {
    fetchPokemons(generation, setPokemons);
  }, [generation, setPokemons]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGeneration = parseInt(event.target.value);
    setGeneration(selectedGeneration);
    fetchPokemons(selectedGeneration, setPokemons);
  };

  return (
    <div>
      <TitlePokedex />
      <SearchBar />
      <GenerationPokemon generation={generation} handleChange={handleChange} />
      <PokedexStyled>
        {pokemons.map((pokemon) => (
          <CardPokedex
            key={pokemon.pokedex_id}
            numero={pokemon.pokedex_id}
            namePokemon={pokemon.name.fr}
            src={pokemon.sprites.regular}
            alt={pokemon.name.fr}
            typePokemon={pokemon.types.map((type) => type.image)}
            onDetails={() => handleDetails(pokemon.pokedex_id, generation)}
          />
        ))}
        <ScrollToTopButton />
      </PokedexStyled>
    </div>
  );
}

const PokedexStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  margin-left: 35px;
  margin-top: 20px;

  @media (max-width: 1130px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
