import axios from "axios";
import { PokemonsType } from "../components/reusable-type/pokemonType";

export const fetchPokemons = async (generation: number, setPokemons: React.Dispatch<React.SetStateAction<PokemonsType[]>>) => {
    try {
      const res = await axios.get(
        `https://tyradex.vercel.app/api/v1/gen/${generation}`
      );
      setPokemons(res.data);
    } catch (err) {
      console.error(
        "Erreur dans la récupération des données des pokémons :",
        err
      );
    }
  };

  export const fetchSearchPokemonsName = async (setPokemons: React.Dispatch<React.SetStateAction<PokemonsType[]>>) => {
    try {
      const res = await axios.get(
        `https://tyradex.vercel.app/api/v1/pokemon/`
      );
      setPokemons(res.data);
    } catch (err) {
      console.error(
        "Erreur dans la récupération des données des pokémons :",
        err
      );
    }
  };