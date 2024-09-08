import styled from "styled-components";
import Pokedex from "./pokedexList/Pokedex";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
import { PokemonContext } from "../../../context/PokemonContext";
import DetailsPokemon from "./detailsPokemon/DetailsPokemon";
import { PokemonsType } from "../../reusable-type/pokemonType";
import MyPokedexPage from "./myPokedexUser/MyPokedexPage";
import { usePokedex } from "../../../hook/usePokedex";

export default function PokedexPage() {
  const [isMyPokedex, setIsMyPokedex] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonsType[]>([]);
  const {
    myPokedex,
    setMyPokedex,
    onAddFavorite,
    handleDetails,
    isDetailsPokemon,
    pokemonId,
    setPokemonId,
    setIsDetailsPokemon,
  } = usePokedex();

  const PokemonContextValue = {
    isDetailsPokemon,
    setIsDetailsPokemon,
    pokemons,
    setPokemons,
    pokemonId,
    setPokemonId,
    isMyPokedex,
    setIsMyPokedex,
    onAddFavorite,
    myPokedex,
    setMyPokedex,
    handleDetails,
  };

  return (
    <PokemonContext.Provider value={PokemonContextValue}>
      <PokedexPageStyled>
        <div className="container-pokemon">
          {isDetailsPokemon && <DetailsPokemon />}
          {isMyPokedex && <MyPokedexPage />}
          <Navbar />
          <Pokedex />
        </div>
      </PokedexPageStyled>
    </PokemonContext.Provider>
  );
}

const PokedexPageStyled = styled.div`
  display: flex;
  justify-content: center;
  background: url("/img/pokemon_mignon.jfif") rgba(148, 148, 148, 0.7);
  background-blend-mode: darken;
  background-repeat: space repeat;
  background-attachment: fixed;
  min-height: 100vh;

  .container-pokemon {
    background: white;
    width: 1170px;
    padding: 20px;
  }
`;
