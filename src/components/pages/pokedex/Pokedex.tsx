import { useParams } from "react-router-dom"

export default function Pokedex() {
    const {username} = useParams()
  return (
    <div>Pokedex {username}</div>
  )
}
