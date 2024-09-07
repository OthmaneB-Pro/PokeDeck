import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../../../../context/PokemonContext";

export default function ListNavbar() {
  const { username } = useParams();
  const {setIsMyPokedex} = useContext(PokemonContext)

  return (
    <ListNavbarStyled>
      <ul>
        <li>
          <a href="/">Déconnexion</a>
        </li>
        <li onClick={()=> setIsMyPokedex(true)}>
         <span>Votre Pokedex {username}</span> 
        </li>
      </ul>
    </ListNavbarStyled>
  );
}

const ListNavbarStyled = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    li {
      list-style: none;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;

      span, a {
        text-decoration: none;
        color: black;
        position: relative;
        display: inline-block;
        padding: 5px 0;
        transition: color 0.3s ease;
      }

      span:hover, a:hover {
        color: #ff6b6b;
        transform: translateY(-3px);
      }
    }
  }
`;
