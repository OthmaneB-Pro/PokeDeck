import styled from "styled-components";

export default function Overlay() {
  return (
    <OverlayStyled/>
  )
}

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;