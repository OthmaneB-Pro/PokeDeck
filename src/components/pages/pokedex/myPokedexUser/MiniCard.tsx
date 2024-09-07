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
  background-color: red;
  width: 200px;
  height: 200px;
`;
