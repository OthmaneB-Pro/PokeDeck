import { useParams } from "react-router-dom";
import styled from "styled-components";
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
        <div className="navbar">
          <h1>
            <SiPokemon />
          </h1>
          <div>
            <ul>
              <li>
                <a href="/">Déconnexion</a>
              </li>
              <li>
                <a href="/">Votre Pokedex {username}</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Trier le Pokedex :</h2>
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
  h1 {
    width: 250px;
    height: 100px;
    position: relative;
    bottom: 100px;
    svg {
      width: 250px;
      height: 250px;
    }
  }
  ul {
    display: flex;
    gap: 50px;
    li {
      list-style: none;
      font-size: 18px;
      font-weight: 700;
      a {
        text-decoration: none;
        color: black;
        position: relative;
        display: inline-block;
        padding: 5px 0;
        transition: color 0.3s ease;
      }

      a::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        display: block;
        margin-top: 5px;
        right: 0;
        background: #c2c2c2;
        transition: width 0.3s ease;
        -webkit-transition: width 0.3s ease;
      }

      a:hover::after {
        width: 100%;
        left: 0;
        background: #c2c2c2;
      }

      a:hover {
        color: #333;
        transform: translateY(-5px);
      }
    }
  }
  .navbar {
    display: flex;
    justify-content: space-between;
  }
  select {
  width: 200px;
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid #ccc;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  font-size: 16px;
  font-weight: 600;
  color: #333;
  outline: none;
  transition: all 0.3s ease;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: #888;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

select:focus {
  border-color: #555;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

select option {
  background-color: #fff;
  color: #333;
  padding: 10px;
}

`;
