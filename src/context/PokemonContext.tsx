import { createContext } from "react";
import { PokemonsType } from "../components/reusable-type/pokemonType";

type PokemonContextType = {
  isShiny: boolean;
  setIsShiny: React.Dispatch<React.SetStateAction<boolean>>;
  isDetailsPokemon: boolean;
  setIsDetailsPokemon: React.Dispatch<React.SetStateAction<boolean>>;
  pokemons : PokemonsType[];
  setPokemons : React.Dispatch<React.SetStateAction<PokemonsType[]>>;
};

export const PokemonContext = createContext<PokemonContextType>({
  isShiny: false,
  setIsShiny: () => {},
  isDetailsPokemon: false,
  setIsDetailsPokemon: () => {},
  pokemons : [],
setPokemons : () => {},
});
