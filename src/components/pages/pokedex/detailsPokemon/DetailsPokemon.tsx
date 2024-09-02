import styled from "styled-components";
import { useContext } from "react";
import { PokemonContext } from "../../../../context/PokemonContext";

export default function DetailsPokemon() {
    const {setIsDetailsPokemon, pokemons} = useContext(PokemonContext)
  return (
    <>
      <Overlay />
      <DetailsPokemonStyled>
        <p>{pokemons[0].pokedex_id}</p>{/* Recuperation par le 0 du pokemon, ca veut dire il faut que le 0 soit dynamique par rapport a ce qu'on click et ensuite on met les valeurs par rapport a l'id et l'api */}
        <button onClick={() => setIsDetailsPokemon(false)}>Close</button>
      </DetailsPokemonStyled>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
`;

const DetailsPokemonStyled = styled.div`
  position: fixed;
  margin-left: 200px;
  margin-bottom: 300px;
  background-color: white; 
  width: 720px;
  height: 650px;
  z-index: 1000; 
  padding: 20px;
  border: 1px solid black;
  border-radius: 15px;
`;
