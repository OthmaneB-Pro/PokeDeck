import styled from "styled-components";

export default function LoginForm() {
  return (
    <LoginFormStyled>
      <div className="container">
        <h1>Connexion</h1>
        <label>Email :</label>
        <input type="email" placeholder="Entrez votre email" />
        <label>Mot de passe :</label>
        <input type="password" placeholder="Entrez votre mot de passe" />
        <button>Se connecter</button>
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
    width: 100%;
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
`;
