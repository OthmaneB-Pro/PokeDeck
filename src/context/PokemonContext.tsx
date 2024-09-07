import { createContext } from "react";
import { PokemonsType } from "../components/reusable-type/pokemonType";

type PokemonContextType = {
  isDetailsPokemon: boolean;
  setIsDetailsPokemon: React.Dispatch<React.SetStateAction<boolean>>;
  pokemons: PokemonsType[];
  setPokemons: React.Dispatch<React.SetStateAction<PokemonsType[]>>;
  pokemonId: number;
  setPokemonId: React.Dispatch<React.SetStateAction<number>>;
  isMyPokedex: boolean;
  setIsMyPokedex: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PokemonContext = createContext<PokemonContextType>({
  isDetailsPokemon: false,
  setIsDetailsPokemon: () => {},
  pokemons: [],
  setPokemons: () => {},
  pokemonId: 0,
  setPokemonId: () => {},
  isMyPokedex: false,
  setIsMyPokedex: () => {},
});
