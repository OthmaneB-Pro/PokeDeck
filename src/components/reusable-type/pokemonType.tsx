export type PokemonsType = {
  pokedex_id: number;
  generation: number;
  category: string;
  name: {
    fr: string;
  };
  sprites: {
    regular: string;
    shiny: string;
  };
  types: [
    {
      name: string;
      image: string;
    }
  ];
};

export type GenerationPokemonType = {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  generation: number;
};
