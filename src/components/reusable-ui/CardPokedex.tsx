import styled from "styled-components";

type CardPokedexType = {
  src: string;
  alt: string;
  numero: number;
  namePokemon: string;
  typePokemon: string[];
  IconPokeball: JSX.Element;
  IconShiny: JSX.Element;
  onShiny: () => void;
  onPokeball: () => void;
};

export default function CardPokedex({
  src,
  alt,
  numero,
  namePokemon,
  typePokemon,
  IconPokeball,
  IconShiny,
  onShiny,
  onPokeball,
}: CardPokedexType) {
  return (
    <CardPokedexStyled>
      <div className="image">
        <img src={src} alt={alt} />
        <div className="button-pokemon">
          <button onClick={onPokeball}>{IconPokeball && IconPokeball}</button>
          <button onClick={onShiny}>{IconShiny && IconShiny}</button>
        </div>
      </div>

      <div className="text-pokemon">
        <p>#{numero}</p>
        <h2>{namePokemon}</h2>
        {typePokemon.map((image, index) => (
          <img key={index} src={image} alt="Type icon" />
        ))}
      </div>
    </CardPokedexStyled>
  );
}

const CardPokedexStyled = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  position: relative;

  .image {
    border-radius: 10px;
    height: 250px;
    background: #dddddd;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    .button-pokemon {
      margin-left: 75px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 50px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      position: relative;

      button {
        background-color: white;
        border: none;
        cursor: pointer;

        svg {
          width: 20px;
          height: auto;
        }
      }
    }
    img {
      margin-left: 35px;
      width: 70%;
      height: auto;
      object-fit: cover;
    }
  }
  .text-pokemon {
    position: absolute;

    img {
      margin-top: 0;
      width: 25px;
      height: auto;
    }
    p {
      margin-bottom: 0;
      margin-top: 0;
      color: #757575;
    }
    h2 {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
`;
