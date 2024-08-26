import styled from "styled-components";
import LoginForm from "./LoginForm";
import { useState } from "react";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)
  return (
    <LoginPageStyled>
        <LoginForm isLogin={isLogin} setIsLogin={setIsLogin}/>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`

`