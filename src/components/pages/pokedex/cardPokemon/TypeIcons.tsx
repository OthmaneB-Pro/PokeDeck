export default function TypeIcons({ typePokemon }: { typePokemon: string[] }) {
  return (
    <>
    {typePokemon.map((type, index) => (
      <img key={index} src={type} alt="Type icon" />
    ))}
  </>
  )
}
