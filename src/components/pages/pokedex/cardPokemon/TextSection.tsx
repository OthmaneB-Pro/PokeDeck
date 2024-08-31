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
  position: absolute;

  img {
    margin-top: 0;
    width: 25px;
    height: auto;
  }

  p {
    margin: 0;
    color: #757575;
  }

  h2 {
    margin: 0;
  }
`;
