import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function ListNavbar() {
  const { username } = useParams();

  return (
    <ListNavbarStyled>
      <ul>
        <li>
          <a href="/">Déconnexion</a>
        </li>
        <li>
          <a href="/">Votre Pokedex {username}</a>
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
      a {
        text-decoration: none;
        color: black;
        position: relative;
        display: inline-block;
        padding: 5px 0;
        transition: color 0.3s ease;
      }

      a::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        display: block;
        margin-top: 5px;
        right: 0;
        background: #c2c2c2;
        transition: width 0.3s ease;
        -webkit-transition: width 0.3s ease;
      }

      a:hover::after {
        width: 100%;
        left: 0;
        background: #c2c2c2;
      }

      a:hover {
        color: #333;
        transform: translateY(-5px);
      }
    }
  }
`;
