import styled from "styled-components";

type TitleFormType = {
  isLogin: boolean;
};

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
