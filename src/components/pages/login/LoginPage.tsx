import styled from "styled-components";
import LoginForm from "./LoginForm";
import { useState } from "react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <LoginPageStyled>
      <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  background: url("/img/fond_pokemon.jpg") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
