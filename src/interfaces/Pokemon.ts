import { NamedAPIResource } from './NamedAPIResource';

export type IPokemon = {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: NamedAPIResource[];
  game_indices: [
    {
      game_index: 76;
      version: NamedAPIResource;
    },
  ];
  height: number;
  held_items: [
    {
      item: NamedAPIResource;
      version_details: [
        {
          rarity: number;
          version: NamedAPIResource;
        },
      ];
    },
  ];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [
    {
      move: NamedAPIResource;
      version_group_details: [
        {
          level_learned_at: number;
          move_learn_method: NamedAPIResource;
          version_group: NamedAPIResource;
        },
      ];
    },
  ];
  name: string;
  order: number;
  past_types: [
    {
      generation: NamedAPIResource;
      types: [
        {
          slot: number;
          type: NamedAPIResource;
        },
      ];
    },
  ];
  species: NamedAPIResource;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other?: {
      dream_world: DreamWorldSprites;
      'official-artwork': OfficialArtworkSprites;
      home: HomeSprites;
    };
    version: VersionSprites;
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: NamedAPIResource;
    },
  ];
  types: [
    {
      slot: number;
      type: NamedAPIResource;
    },
  ];
  weight: number;
};

export type PokemonAbility = {
  is_hidden: boolean;
  slot: 1;
  ability: NamedAPIResource;
};

type DreamWorldSprites = {
  front_default: string | null;
  front_female: string | null;
};

type OfficialArtworkSprites = {
  front_default: string | null;
};

type HomeSprites = {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

type VersionSprites = {
  'generation-i': GenerationISprites;
  'generation-ii': GenerationIISprites;
  'generation-iii': GenerationIIISprites;
  'generation-iv': GenerationIVSprites;
  'generation-v': GenerationVSprites;
  'generation-vi': GenerationVISprites;
  'generation-vii': GenerationVIISprites;
  'generation-viii': GenerationVIIISprites;
};

export interface GenerationISprites {
  'red-blue': RedBlue;
  yellow: Yellow;
}

export interface RedBlue {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

export interface Yellow {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

export interface GenerationIISprites {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}
export interface Crystal {
  back_default: string | null;
  back_shiny: string | null;
  back_shiny_transparent: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_shiny_transparent: string | null;
  front_transparent: string | null;
}
export interface Gold {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

interface Silver {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

export interface GenerationIIISprites {
  emerald: Emerald;
  'firered-leafgreen': FireredLeafgreen;
  'ruby-sapphire': RubySapphire;
}

export interface Emerald {
  front_default: string | null;
  front_shiny: string | null;
}

export interface FireredLeafgreen {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface RubySapphire {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface GenerationIVSprites {
  'diamond-pearl': DiamondPearl;
  'heartgold-soulsilver': HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface DiamondPearl {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface HeartgoldSoulsilver {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface Platinum {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVSprites {
  'black-white': BlackWhite;
}

export interface Animated {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface BlackWhite {
  animated: Animated;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVISprites {
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
  'x-y': XY;
}

export interface OmegarubyAlphasapphire {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface XY {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIISprites {
  icons: GenerationViiIcons;
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

export interface GenerationViiIcons {
  front_default: string | null;
  front_female: string | null;
}

export interface UltraSunUltraMoon {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIIISprites {
  icons: GenerationViiiIcons;
}

export interface GenerationViiiIcons {
  front_default: string | null;
  front_female: string | null;
}
