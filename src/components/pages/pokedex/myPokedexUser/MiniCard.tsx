import styled from "styled-components";

type MiniCardType = {
  src: string;
  alt: string;
};

export default function MiniCard({ src, alt }: MiniCardType) {
  return (
    <MiniCardStyled>
      <img src={src} alt={alt} />
    </MiniCardStyled>
  );
}

const MiniCardStyled = styled.div`
  background-color: #dddddd;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  img {
    width: 60%;
    height: auto;
    object-fit: cover;
  }
`;
