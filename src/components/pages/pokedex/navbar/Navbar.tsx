import styled from "styled-components";
import ListNavbar from "./ListNavbar";
import LogoNavbar from "./LogoNavbar";

export default function Navbar() {
  return (
    <NavbarStyled>
      <LogoNavbar />
      <ListNavbar />
    </NavbarStyled>
  );
}
const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
