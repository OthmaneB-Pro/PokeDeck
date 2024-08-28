import styled from "styled-components";

type CardPokedexType = {
  src: string;
  alt: string;
  numero: number;
  namePokemon: string;
  typePokemon?: string;
};

export default function CardPokedex({
  src,
  alt,
  numero,
  namePokemon,
  typePokemon,
}: CardPokedexType) {
  return (
    <CardPokedexStyled>
      <div className="image">
        <img src={src} alt={alt} />
      </div>
      <div className="text-pokemon">
        <p>#{numero}</p>
        <h2>{namePokemon}</h2>
        <p>{typePokemon}</p>
      </div>
    </CardPokedexStyled>
  );
}

const CardPokedexStyled = styled.div`
  background: pink;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  position: relative;

  .image {
    height: 220px;
    background: #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      height: auto;
      object-fit: cover;
    }
  }
  .text-pokemon {
    position: absolute;
  }
`;
