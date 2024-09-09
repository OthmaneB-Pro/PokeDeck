import { useState } from "react";
import { PokemonsType } from "../components/reusable-type/pokemonType";
import { calculateGlobalId } from "../utils/functionPokemon";
import toast from "react-hot-toast";

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
      toast.success("Le Pokemon est bien ajouté au pokedex");
    } else {
      setMyPokedex(deletePokemonInPokedex);
      toast.success("Le Pokemon est bien supprimer du pokedex");
    }
  };

  const handleDetails = (localId: number, generation: number) => {
    setIsDetailsPokemon(true);
    const globalId = calculateGlobalId(localId, generation);
    setPokemonId(globalId - 1);
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
