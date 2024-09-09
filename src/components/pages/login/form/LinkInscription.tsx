import styled from "styled-components";
import { LinkInscriptionType } from "./LoginType";

export default function LinkInscription({ onClick }: LinkInscriptionType) {
  return (
    <ParagraphInscriptionStyled>
      Pas encore inscrit ?{" "}
      <span className="link" onClick={onClick}>
        Inscrivez-vous
      </span>
    </ParagraphInscriptionStyled>
  );
}

const ParagraphInscriptionStyled = styled.p`
  .link {
    color: #ff6b6b;
    cursor: pointer;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #ff4a4a;
      text-decoration: underline;
    }
  }
`;
