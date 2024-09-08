import { useState } from "react";
import { PokemonsType } from "../components/reusable-type/pokemonType";

export const usePokedex = () => {
  const [myPokedex, setMyPokedex] = useState<PokemonsType[]>([]);
  const [isDetailsPokemon, setIsDetailsPokemon] = useState(false);
  const [pokemonId, setPokemonId] = useState(0);

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

  const handleDetails = (idPokemon: number) => {
    setIsDetailsPokemon(true);
    setPokemonId(idPokemon - 1);
  };

  return {
    myPokedex,
    setMyPokedex,
    onAddFavorite,
    handleDetails,
    isDetailsPokemon,
    setIsDetailsPokemon,
    pokemonId,
    setPokemonId,
  };
};
