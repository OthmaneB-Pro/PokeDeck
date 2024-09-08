import styled from "styled-components";
import TypeIcons from "./TypeIcons";

export default function TextSection({ numero, namePokemon, typePokemon }: any) {
  return (
    <TextWrapper>
      <p>#{numero}</p>
      <h2>{namePokemon}</h2>
      <TypeIcons typePokemon={typePokemon} />
    </TextWrapper>
  );
}

const TextWrapper = styled.div`
  width: 100%;
  padding: 15px;
  text-align: center;

  p {
    margin: 0;
    color: #757575;
    font-size: 14px;
  }

  h2 {
    margin: 5px 0;
    font-size: 20px;
    color: #333;
    transition: color 0.3s ease;
  }

  img {
    margin-top: 10px;
    width: 25px;
    height: auto;
  }

  &:hover h2 {
    color: #ff6b6b; 
  }
`;
