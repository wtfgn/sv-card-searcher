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

export interface CardPack {
	name: string;
}

export interface Craft {
	name: string;
	iconCardId: number;
}

export interface Rarity {
	name: string;
}

export interface Format {
	name: string;
}

export interface Type {
	name: string;
}