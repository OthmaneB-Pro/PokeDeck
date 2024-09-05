import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import CardPokedex from "../../../reusable-ui/CardPokedex";
import { fetchPokemons } from "../../../../api/PokemonApi";
import GenerationPokemon from "./../pokemonSort/GenerationPokemon";
import TitlePokedex from "./TitlePokedex";
import SearchBar from "./../search/SearchBar";
import { PokemonContext } from "../../../../context/PokemonContext";

export default function Pokedex() {
  const [generation, setGeneration] = useState(1);
  const { setIsDetailsPokemon, pokemons, setPokemons, setPokemonId } =
    useContext(PokemonContext);

  useEffect(() => {
    fetchPokemons(generation, setPokemons);
  }, [generation, setPokemons]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGeneration = parseInt(event.target.value);
    setGeneration(selectedGeneration);
    fetchPokemons(selectedGeneration, setPokemons);
  };

  const handleDetails = (idPokemon: number) => {
    setIsDetailsPokemon(true);
    setPokemonId(idPokemon - 1);
    console.log("IdPokemon", idPokemon);
  };

  return (
    <PokedexStyled>
      <TitlePokedex />
      <SearchBar />
      <GenerationPokemon generation={generation} handleChange={handleChange} />
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <CardPokedex
            key={pokemon.pokedex_id}
            numero={pokemon.pokedex_id}
            namePokemon={pokemon.name.fr}
            src={pokemon.sprites.regular}
            alt={pokemon.name.fr}
            typePokemon={pokemon.types.map((type) => type.image)}
            onDetails={() => handleDetails(pokemon.pokedex_id)}
          />
        ))}
      </div>
    </PokedexStyled>
  );
}

const PokedexStyled = styled.div`
  .pokedex {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    margin-left: 35px;
    margin-top: 20px;
  }
  button {
    width: 240px;
    background-color: black;
  }
`;
