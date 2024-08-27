import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../reusable-ui/Button";
import { useEffect, useState } from "react";
import axios from "axios";

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
          {pokemons.map((pokemon, index) => (
            <div key={index}>
              <span>{pokemon.name.fr}</span>
            </div>
          ))}
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
  .container {
    background: white;
    width: 1170px;
    height: 100vh;
  }
`;
