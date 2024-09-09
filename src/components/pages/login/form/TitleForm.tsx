import styled from "styled-components";
import { TitleFormType } from "./LoginType";

export default function TitleForm({ isLogin }: TitleFormType) {
  return (
    <TitleFormStyled>{isLogin ? "Connexion" : "Inscription"}</TitleFormStyled>
  );
}

const TitleFormStyled = styled.h1`
  margin-bottom: 30px;
  color: #333;
  font-size: 2rem;
  font-weight: bold;
`;
