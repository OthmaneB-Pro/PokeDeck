import styled from "styled-components"

export default function DetailsPokemon() {
  return (
    <DetailsPokemonStyled>DetailsPokemon</DetailsPokemonStyled>
  )
}

const DetailsPokemonStyled = styled.div`
position: fixed;
margin-left: 200px;
margin-bottom: 300px;
    background-color: pink;
    width: 720px;
    height: 600px;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
  border: 1px solid black;
  border-radius: 15px;
`