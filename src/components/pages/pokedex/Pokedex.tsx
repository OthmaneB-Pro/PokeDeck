import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../reusable-ui/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import CardPokedex from "../../reusable-ui/CardPokedex";
import { SiPokemon } from "react-icons/si";
import { TbPokeball } from "react-icons/tb";
import { PiPokerChip } from "react-icons/pi";

type PokemonsType = {
  pokedex_id: number;
  generation: number;
  category: string;
  name: {
    fr: string;
  };
  sprites: {
    regular: string;
    shiny: string;
  };
  types: [
    {
      name: string;
      image: string;
    }
  ];
};

export default function Pokedex() {
  const { username } = useParams();
  const [pokemons, setPokemons] = useState<PokemonsType[]>([]);
  const [generation, setGeneration] = useState(1);
  const [isShiny, setIsShiny] = useState(false);

  const fetchPokemons = async (generation: number) => {
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

  useEffect(() => {
    fetchPokemons(generation);
    console.log("oui");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGeneration = parseInt(event.target.value);
    setGeneration(selectedGeneration);
    fetchPokemons(selectedGeneration);
  };

  return (
    <PokedexStyled>
      <div className="container">
        <h1>
          <SiPokemon />
        </h1>
        <div>
          <Button label="Deconnexion" />
          <Button label={`Votre Pokedex ${username}`} />
          <select name="generation" onChange={handleChange} value={generation}>
            <option value={1}>Génération 1</option>
            <option value={2}>Génération 2</option>
            <option value={3}>Génération 3</option>
            <option value={4}>Génération 4</option>
            <option value={5}>Génération 5</option>
            <option value={6}>Génération 6</option>
            <option value={7}>Génération 7</option>
            <option value={8}>Génération 8</option>
            <option value={9}>Génération 9</option>
          </select>
          <div className="pokedex">
            {pokemons.map((pokemon) => (
              <CardPokedex
                key={pokemon.pokedex_id}
                numero={pokemon.pokedex_id}
                namePokemon={pokemon.name.fr}
                src={isShiny ? pokemon.sprites.shiny : pokemon.sprites.regular}
                alt={pokemon.name.fr}
                typePokemon={pokemon.types.map((type) => type.image)}
                IconPokeball={<TbPokeball />}
                IconShiny={<PiPokerChip />}
                onShiny={() => {
                  setIsShiny(!isShiny);
                }}
                onPokeball={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </PokedexStyled>
  );
}

const PokedexStyled = styled.div`
  display: flex;
  justify-content: center;
  background: url("/img/pokemon_mignon.jfif") rgba(148, 148, 148, 0.7);
  background-blend-mode: darken;
  background-repeat: space repeat;
  background-attachment: fixed;
  min-height: 100vh;

  .container {
    background: white;
    width: 1170px;
    padding: 20px;
  }
  .pokedex {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    margin-left: 35px;
    margin-top: 20px;
  }
  button {
    width: 240px;
    background-color: black;
  }
`;
