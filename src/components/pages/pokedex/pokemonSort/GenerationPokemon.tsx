import styled from "styled-components";
import { GenerationPokemonType } from "../../../reusable-type/pokemonType";
import { generations } from "./optionGenerations";

export default function GenerationPokemon({
  handleChange,
  generation,
}: GenerationPokemonType) {
  return (
    <GenerationPokemonStyled
      name="generation"
      onChange={handleChange}
      value={generation}
    >
      {generations.map((gen) => (
        <option key={gen.value} {...gen} />
      ))}
    </GenerationPokemonStyled>
  );
}

const GenerationPokemonStyled = styled.select`
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

  :hover {
    border-color: #888;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  :focus {
    border-color: #555;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  option {
    background-color: #fff;
    color: #333;
    padding: 10px;
  }
`;
