import { Card, CardPack, Craft, Rarity, Format, Type } from '@/types';
import { defineStore } from 'pinia';
import axios from 'axios';
import categories from '@/json/categories.json'

type RawCardsData = Record<string, Card>;

interface State {
	rawCardsData: RawCardsData;
}

export const useMainStore = defineStore('main', {
	state: (): State => ({
		rawCardsData: {},
	}),
	getters: {
		cards(): Card[] {
			return Object.values(this.rawCardsData);
		},
		cardPacks(): CardPack[] {
			return categories.cardPacks;
		},
		crafts(): Craft[] {
			return categories.crafts;
		},
		rarities(): Rarity[] {
			return categories.rarities;
		},
		formats(): Format[] {
			return categories.formats;
		},
		types(): Type[] {
			return categories.types;
		},
	},
	actions: {
		async fetchCardsData(): Promise<RawCardsData> {
			const apiURL = 'https://svgdb.me/api/en';
			try {
				const response = await axios.get(apiURL)
				const rawCardsData = response.data as RawCardsData;
				return rawCardsData;
			}
			catch (error) {
				console.error(error);
				throw error;
			}
		},
		setRawCardsData(rawCardsData: RawCardsData): void {
			this.rawCardsData = rawCardsData;
		},
	},
});