import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type LoginFormType = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

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
      <div className="container">
        <form action="submit" onSubmit={handleSubmit}>
          <h1>{isLogin ? "Connexion" : "Inscription"}</h1>
          <label>Nom :</label>
          <input
            value={user.username}
            name="username"
            type="text"
            placeholder="Entrez votre nom"
            onChange={handleChange}
            required
          />
          <label>Mot de passe :</label>
          <input
            value={user.password}
            name="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            onChange={handleChange}
            required
          />
          <button type="submit">
            {isLogin ? "Se connecter" : "S'inscrire"}
          </button>
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
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  height: 100vh;
  background: url("/img/fond_pokemon.jpg") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: rgba(255, 255, 255, 0.9);
    width: 400px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    margin-bottom: 30px;
    color: #333;
    font-size: 2rem;
    font-weight: bold;
  }

  label {
    align-self: flex-start;
    margin-bottom: 10px;
    color: #555;
    font-size: 1rem;
    font-weight: 500;
  }

  input {
    width: 90%;
    padding: 12px 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border 0.3s ease;

    &:focus {
      border-color: #3a92da;
      outline: none;
    }
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
