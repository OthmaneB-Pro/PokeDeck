import styled from "styled-components";

type CardPokedexType = {
  src: string;
  alt: string;
  numero: number;
  namePokemon: string;
  typePokemon: string[];
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
        <p>{typePokemon.map((image, index) => (
            <img key={index} src={image} alt="Type icon" />
          ))}</p>
      </div>
    </CardPokedexStyled>
  );
}

const CardPokedexStyled = styled.div`
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

    p{
        margin-bottom: 0;
        margin-top: 0;

        img{
            margin-top: 0;
            width: 25px;
            height: auto;
        }
    }
    h2{
        margin-top: 0px;
        margin-bottom: 0px;
    }
  }
`;
