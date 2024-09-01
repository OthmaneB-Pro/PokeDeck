import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { PokemonsType } from "../../reusable-type/pokemonType";
import { fetchSearchPokemonsName } from "../../../api/PokemonApi";
import CardPokedex from "../../reusable-ui/CardPokedex";
import { TbPokeball } from "react-icons/tb";
import { PiPokerChip, PiPokerChipFill } from "react-icons/pi";
import { PokemonContext } from "../../../context/PokemonContext";

export default function SearchBar() {
  const [name, setName] = useState("");
  const [resultsApiCall, setResultsApiCall] = useState<PokemonsType | null>(null)
  const {isShiny, setIsShiny} = useContext(PokemonContext)

  useEffect(() => {  
    const debounce = setTimeout(() => {
        if(name.trim() === ""){
            setResultsApiCall(null);
            return;
        }
        fetchSearchPokemonsName(name, setResultsApiCall)
      }, 500);
  
      return () => clearTimeout(debounce);
  }, [name])
  

  return (
    <SearchBarStyled>
      <h3>Faites votre recherche :</h3>
      <div className="search-container">
        <input
          type="search"
          placeholder="Recherchez votre Pokémon"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
        
    <div className="Card-Search-Result">
        
        {resultsApiCall ?
           <CardPokedex
           key={resultsApiCall.pokedex_id}
           numero={resultsApiCall.pokedex_id}
           namePokemon={resultsApiCall.name.fr}
           src={isShiny ? resultsApiCall.sprites.shiny : resultsApiCall.sprites.regular}
           alt={resultsApiCall.name.fr}
           typePokemon={resultsApiCall.types.map((type) => type.image)}
           IconPokeball={<TbPokeball />}
           IconShiny={isShiny ? <PiPokerChipFill /> : <PiPokerChip />}
           onShiny={() => {
             setIsShiny(!isShiny);
           }  }
           onPokeball={() => {}}
         /> : <p>Aucun Pokemon</p>
}
    </div>
      </div>
    </SearchBarStyled>
  );
}

const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h3 {
    color: #333;
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
  }

  .search-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 320px;
  }

  input {
    width: 100%;
    height: 45px;
    padding: 0 15px;
    padding-right: 50px;
    border-radius: 25px;
    border: 2px solid #ddd;
    background-color: #fff;
    font-size: 16px;
    color: #555;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }

    &::placeholder {
      color: #aaa;
      font-style: italic;
    }
  }

  button {
    width: 35px !important;
    height: 35px !important;
    position: absolute;
    right: 5px;
    background-color: #a7a7a7;
    border: none;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;

    svg {
      color: #fff;
      font-size: 16px;
    }

    &:hover {
      background-color: #444444;
    }
  }
`;
