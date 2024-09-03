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
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
  height: number;
  weight: number;
};

export type GenerationPokemonType = {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  generation: number;
};

export type CardPokedexType = {
  src: string;
  alt: string;
  numero: number;
  namePokemon: string;
  typePokemon: string[];
  IconPokeball: JSX.Element;
  IconShiny: JSX.Element;
  onShiny: () => void;
  onPokeball: () => void;
  onDetails: (id: number) => void;
};
