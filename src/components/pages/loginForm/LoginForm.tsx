import styled from "styled-components";


export default function LoginForm() {
  return <LoginFormStyled>
    <div className="container">
       <h1>Connexion</h1> 
       <input></input>
       <input></input>
        <button>Se connecter</button>
    </div>
  </LoginFormStyled>;
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

  .container{
    background-color: rgba(255, 255, 255, 0.85);
    width: 450px;
    height: 600px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input{
    width: 260px;
    padding: 10px 20px;
  }
  button{
    background-color: #3a92da;
    border: none;
    border-radius: 5px;
    width: 300px;
    height: 40px;
    cursor: pointer;
  }
`;
