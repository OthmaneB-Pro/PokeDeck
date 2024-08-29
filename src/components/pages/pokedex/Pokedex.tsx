import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../reusable-ui/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import CardPokedex from "../../reusable-ui/CardPokedex";

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

  const fetchPokemons = async () => {
    try {
      const res = await axios.get("https://tyradex.vercel.app/api/v1/gen/1");
      setPokemons(res.data);
    } catch (err) {
      console.error(
        "Erreur dans la récupération des données des pokémons :",
        err
      );
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokedexStyled>
      <div className="container">
        <div>
          <Button label="Deconnexion" />
          <Button label={`Votre Pokedex ${username}`} />
          <div className="pokedex">
            {pokemons.map((pokemon) => (
              <CardPokedex
                key={pokemon.pokedex_id}
                numero={pokemon.pokedex_id}
                namePokemon={pokemon.name.fr}
                src={pokemon.sprites.regular}
                alt={pokemon.name.fr}
                typePokemon={pokemon.types.map((type) => type.image)}
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
  }
`;
