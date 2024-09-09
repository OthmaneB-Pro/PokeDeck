import { SiPokemon } from "react-icons/si";
import styled from "styled-components";

export default function LogoNavbar() {
  return (
    <LogoNavbarStyled>
      <SiPokemon />
    </LogoNavbarStyled>
  );
}

const LogoNavbarStyled = styled.h1`
  width: 250px;
  height: 100px;
  position: relative;
  bottom: 100px;
  svg {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 680px) {
    bottom: 60px;
    svg {
      width: 150px;
      height: 150px;
    }
  }
`;
