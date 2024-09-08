import styled from "styled-components";

type MiniCardType = {
  src: string;
  alt: string;
  label: string;
  onDetails : () => void;
};

export default function MiniCard({ src, alt, label, onDetails }: MiniCardType) {
  return (
    <MiniCardStyled onClick={onDetails}>
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
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 70%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  h3 {
    margin-top: 10px;
    color: #333;
    transition: color 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.1);
    }
    h3 {
      color: #ff6b6b;
    }
  }
`;
