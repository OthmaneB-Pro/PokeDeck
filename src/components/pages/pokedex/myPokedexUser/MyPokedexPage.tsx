import { useContext } from "react"
import { PokemonContext } from "../../../../context/PokemonContext"
import Overlay from "../detailsPokemon/Overlay"

export default function MyPokedexPage() {
    const {setisMyPokedex} = useContext(PokemonContext)
  return (
    <div>
        <Overlay/>
        Salam
    </div>
  )
}
