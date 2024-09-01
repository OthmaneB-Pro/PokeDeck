import { createContext } from "react";

type PokemonContextType = {
  isShiny: boolean;
  setIsShiny: React.Dispatch<React.SetStateAction<boolean>>;
  isDetailsPokemon: boolean;
  setIsDetailsPokemon: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PokemonContext = createContext<PokemonContextType>({
  isShiny: false,
  setIsShiny: () => {},
  isDetailsPokemon: false,
  setIsDetailsPokemon: () => {},
});
