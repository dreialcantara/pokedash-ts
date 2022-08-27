export type Ability = {
  name: string;
  url: string;
};

export type Sprites = {
  front_default: string;
};

export type Specie = {
  name: string;
  url: string;
};

export type AbilityResponse = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
};

export type Pokemon = {
  id: number;
  name: string;
  abilities: Array<AbilityResponse>;
  species: Specie;
  sprites: Sprites;
};

export type PokemonResult = {
  name: string;
  url: string;
};
