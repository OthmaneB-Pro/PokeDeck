import styled from "styled-components";

type LinkInscriptionType = {
  onClick: () => void;
};

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
