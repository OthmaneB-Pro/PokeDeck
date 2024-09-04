import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingStyled>Chargement en cours...</LoadingStyled>
  )
}

const LoadingStyled = styled.p`
  font-size: 20px;
  color: #666;
`;