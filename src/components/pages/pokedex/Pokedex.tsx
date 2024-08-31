import styled from "styled-components";
import { useEffect, useState } from "react";
import CardPokedex from "../../reusable-ui/CardPokedex";
import { TbPokeball } from "react-icons/tb";
import { PiPokerChip, PiPokerChipFill } from "react-icons/pi";
import { PokemonsType } from "../../reusable-type/pokemonType";
import { fetchPokemons } from "../../../api/PokemonApi";
import GenerationPokemon from "./pokemonSort/GenerationPokemon";
import TitlePokedex from "./TitlePokedex";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonsType[]>([]);
  const [generation, setGeneration] = useState(1);
  const [isShiny, setIsShiny] = useState(false);

  useEffect(() => {
    fetchPokemons(generation, setPokemons);
  }, [generation]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGeneration = parseInt(event.target.value);
    setGeneration(selectedGeneration);
    fetchPokemons(selectedGeneration, setPokemons);
  };

  return (
    <PokedexStyled>
      <TitlePokedex/>
      <GenerationPokemon generation={generation} handleChange={handleChange} />
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <CardPokedex
            key={pokemon.pokedex_id}
            numero={pokemon.pokedex_id}
            namePokemon={pokemon.name.fr}
            src={isShiny ? pokemon.sprites.shiny : pokemon.sprites.regular}
            alt={pokemon.name.fr}
            typePokemon={pokemon.types.map((type) => type.image)}
            IconPokeball={<TbPokeball />}
            IconShiny={isShiny ? <PiPokerChipFill /> : <PiPokerChip />}
            onShiny={() => {
              setIsShiny(!isShiny);
            }}
            onPokeball={() => {}}
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
