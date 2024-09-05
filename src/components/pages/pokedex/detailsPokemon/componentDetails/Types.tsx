import styled from "styled-components";
import { TypesType } from "./typeComponents";

export default function Types({ types } : TypesType) {
  return (
    <TypesContainer>
      {types.map((type, index) => (
        <TypeImage key={index} src={type.image} alt={type.name} />
      ))}
    </TypesContainer>
  );
}

const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 60px;
    height: 60px;
    margin: 0 10px;
  }
`;

const TypeImage = styled.img`
  width: 50px;
  height: 50px;
`;
