import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginFormType } from "./form/LoginType";
import LabelName from "../../reusable-ui/LabelName";
import InputValue from "../../reusable-ui/InputValue";
import { InputLabelValue } from "./form/inputLabelValue";
import LinkInscription from "./form/LinkInscription";
import Button from "../../reusable-ui/Button";
import TitleForm from "./form/TitleForm";

export default function LoginForm({ isLogin, setIsLogin }: LoginFormType) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/pokedex/${user.username}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((dataUser) => ({ ...dataUser, [name]: value }));
  };

  return (
    <LoginFormStyled>
      <form action="submit" onSubmit={handleSubmit}>
        <TitleForm isLogin={isLogin} />
        {InputLabelValue.map((inputData, index) => (
          <>
            <LabelName label={inputData.label} />
            <InputValue
              key={index}
              name={inputData.name}
              value={user[inputData.name as keyof typeof user]}
              type={inputData.type}
              placeholder={inputData.placeholder}
              onChange={handleChange}
              required
            />
          </>
        ))}
        <Button type="submit" label={isLogin ? "Se connecter" : "S'inscrire"} />
      </form>
      {isLogin && <LinkInscription onClick={() => setIsLogin(false)} />}
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 400px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(255, 107, 107, 0.5),
    0 4px 10px rgba(255, 107, 107, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
