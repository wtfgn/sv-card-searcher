import categories from '@/json/categories.json'

export interface Card {
	alts_: string[];
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

export type CardPack = typeof categories.cardPacks[number] 
export type Craft = typeof categories.crafts[number]
export type Rarity = typeof categories.rarities[number]
export type Format = typeof categories.formats[number]
export type Type = typeof categories.types[number]
export type Cost = typeof categories.costs[number]