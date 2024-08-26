import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginFormType } from "./form/LoginType";
import LabelName from "../../reusable-ui/LabelName";
import InputValue from "../../reusable-ui/InputValue";
import { InputLabelValue } from "./form/inputLabelValue";

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
        <h1>{isLogin ? "Connexion" : "Inscription"}</h1>

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
        <button type="submit">{isLogin ? "Se connecter" : "S'inscrire"}</button>
      </form>
      {isLogin ? (
        <p>
          Pas encore inscrit ?{" "}
          <span className="link" onClick={() => setIsLogin(false)}>
            Inscrivez-vous
          </span>
        </p>
      ) : (
        ""
      )}
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 400px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    margin-bottom: 30px;
    color: #333;
    font-size: 2rem;
    font-weight: bold;
  }

  button {
    background-color: #3a92da;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 12px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #357ab7;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .link {
    color: #3a92da;
    cursor: pointer;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #357ab7;
      text-decoration: underline;
    }
  }
`;
