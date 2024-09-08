import styled from "styled-components";

type MiniCardType = {
  src: string;
  alt: string;
  label : string;
};

export default function MiniCard({ src, alt, label }: MiniCardType) {
  return (
    <MiniCardStyled>
      <img src={src} alt={alt} />
      <h3>{label}</h3>
    </MiniCardStyled>
  );
}

const MiniCardStyled = styled.div`
  background-color: #dddddd;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  img {
    width: 70%;
    height: auto;
    object-fit: cover;
  }
`;
