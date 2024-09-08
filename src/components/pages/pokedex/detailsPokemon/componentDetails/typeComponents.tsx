export type TypesType = {
  types: [
    {
      name: string;
      image: string;
    }
  ];
};

export type ToggleButtonType = {
  isRegular: boolean;
  onRegular: () => void;
  isFavorite: boolean;
  onHeart: () => void;
};

export type StatsType = {
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

export type PokemonNameType = {
  name: string;
};

export type PokemonImageType = {
  src: string;
  alt: string;
};

export type CloseButtonType = {
  onClick: () => void;
  label: string;
};
