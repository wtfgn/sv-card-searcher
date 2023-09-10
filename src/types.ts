import {
  cardPacks,
  crafts,
  rarities,
  formats,
  types,
  costs,
  abilities,
  attacks,
  defences,
  traits,
} from '@/config/categories';

export interface Card {
  alts_: string[];
  artist?: string;
  baseAtk_: number;
  baseDef_: number;
  baseEffect_: string;
  baseFlair_: string;
  craft_: string;
  evoAtk_: number;
  evoDef_: number;
  evoEffect_: string;
  evoFlair_: string;
  expansion_: string;
  id_: number;
  name_: string;
  pp_: number;
  rarity_: string;
  restricted_count: number;
  restricted_count_main: number;
  restricted_count_sub: number;
  rotation_: boolean;
  tokens_: number[];
  trait_: string;
  type_: string;
}

export type Craft = typeof crafts;
export type Format = typeof formats;
export type CardPack = typeof cardPacks;
export type Cost = typeof costs;
export type Type = typeof types;
export type Rarity = typeof rarities;
export type Ability = typeof abilities;
export type Attack = typeof attacks;
export type Defence = typeof defences;
export type Trait = typeof traits;

export type CraftType = keyof Craft;
export type FormatType = keyof Format;
export type CardPackType = keyof CardPack;
export type CostType = keyof Cost;
export type TypeType = keyof Type;
export type RarityType = keyof Rarity;
export type AbilityType = keyof Ability;
export type AttackType = keyof Attack;
export type DefenceType = keyof Defence;
export type TraitType = keyof Trait;

export type CraftName = Craft[CraftType]['name'];
export type FormatName = Format[FormatType]['name'];
export type CardPackName = CardPack[CardPackType]['name'];
export type CostName = Cost[CostType]['name'];
export type TypeName = Type[TypeType]['name'];
export type RarityName = Rarity[RarityType]['name'];
export type AbilityName = Ability[AbilityType]['name'];
export type AttackName = Attack[AttackType]['name'];
export type DefenceName = Defence[DefenceType]['name'];
export type TraitName = Trait[TraitType]['name'];

export type CraftOption = Craft[CraftType];
export type FormatOption = Format[FormatType];
export type CardPackOption = CardPack[CardPackType];
export type CostOption = Cost[CostType];
export type TypeOption = Type[TypeType];
export type RarityOption = Rarity[RarityType];
export type AbilityOption = Ability[AbilityType];
export type AttackOption = Attack[AttackType];
export type DefenceOption = Defence[DefenceType];
export type TraitOption = Trait[TraitType];

export interface CategoryCommonOption {
  name: string;
  value: number;
  [key: string]: string | number;
}
export type CategoryCommonOptions = Record<string, CategoryCommonOption>;
