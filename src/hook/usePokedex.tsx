import { useState } from "react";
import { PokemonsType } from "../components/reusable-type/pokemonType";

export const usePokedex = () => {
  const [myPokedex, setMyPokedex] = useState<PokemonsType[]>([]);

  const onAddFavorite = (NewFavorite: PokemonsType) => {
    const isAlreadyInPokedex = myPokedex.some(
      (pokedex) => pokedex.pokedex_id === NewFavorite.pokedex_id
    );
    const deletePokemonInPokedex = myPokedex.filter(
      (pokemon) => pokemon.pokedex_id !== NewFavorite.pokedex_id
    );
    if (!isAlreadyInPokedex) {
      const updatedPokemons = [NewFavorite, ...myPokedex];
      setMyPokedex(updatedPokemons);
    } else {
      setMyPokedex(deletePokemonInPokedex);
    }
  };

  return {
    myPokedex,
    setMyPokedex,
    onAddFavorite,
  };
};
