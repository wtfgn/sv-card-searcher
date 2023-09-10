import type {
  Card,
  CardPack,
  Craft,
  Format,
  Rarity,
  Type,
  Cost,
  Ability,
  Attack,
  Defence,
  Trait,
  CardPackName,
  CraftName,
  FormatName,
  RarityName,
  TypeName,
  CostName,
  AbilityName,
  AttackName,
  DefenceName,
  TraitName,
} from '@/types';
import { defineStore } from 'pinia';
import axios from 'axios';
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

export type RawCardsData = Record<string, Card>;
export interface CardFilterOptions {
  selectedCrafts: CraftName[];
  selectedFormat: FormatName;
  selectedCardPacks: CardPackName[];
  selectedCosts: CostName[];
  selectedTypes: TypeName[];
  selectedRarities: RarityName[];
  selectedAbilities: AbilityName[];
  selectedAttacks: AttackName[];
  selectedDefences: DefenceName[];
  selectedTraits: TraitName[];
}
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
    cardPacks(): CardPack {
      return cardPacks;
    },
    crafts(): Craft {
      return crafts;
    },
    rarities(): Rarity {
      return rarities;
    },
    formats(): Format {
      return formats;
    },
    types(): Type {
      return types;
    },
    costs(): Cost {
      return costs;
    },
    abilities(): Ability {
      return abilities;
    },
    attacks(): Attack {
      return attacks;
    },
    defences(): Defence {
      return defences;
    },
    traits(): Trait {
      return traits;
    },
  },
  actions: {
    async fetchAllRawCardsData(): Promise<RawCardsData> {
      const apiUrl = 'https://svgdb.me/api/en';
      try {
        const response = await axios.get(apiUrl);
        const rawCardsData = response.data as RawCardsData;
        return rawCardsData;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    setRawCardsData(rawCardsData: RawCardsData): void {
      this.rawCardsData = rawCardsData;
    },

    filterCards(filterOptions: CardFilterOptions): Card[] {
      // Filter cards data by given filter options
      const {
        selectedCardPacks,
        selectedCrafts,
        selectedFormat,
        selectedRarities,
        selectedTypes,
        selectedCosts,
        selectedAbilities,
        selectedAttacks,
        selectedDefences,
        selectedTraits,
      } = filterOptions;

      const isAnyCardPackSelected = selectedCardPacks.length === 0;
      const isAnyCraftSelected = selectedCrafts.length === 0;
      const isAnyRaritySelected = selectedRarities.length === 0;
      const isAnyTypeSelected = selectedTypes.length === 0;
      const isAnyCostSelected = selectedCosts.length === 0;
      const isAnyAbilitySelected = selectedAbilities.length === 0;
      const isAnyAttackSelected = selectedAttacks.length === 0;
      const isAnyDefenceSelected = selectedDefences.length === 0;
      const isAnyTraitSelected = selectedTraits.length === 0;
      const isRotationFormat = selectedFormat === 'Rotation';

      const filteredCardsData = this.cards.filter((card: Card) => {
        const {
          expansion_,
          craft_,
          rotation_,
          rarity_,
          type_,
          pp_,
          baseEffect_,
          evoEffect_,
          baseAtk_,
          baseDef_,
          trait_,
        } = card;

        return (
          (isAnyCardPackSelected || selectedCardPacks.includes(expansion_ as CardPackName)) &&
          (isAnyCraftSelected || selectedCrafts.includes(craft_ as CraftName)) &&
          (isRotationFormat ? rotation_ : !rotation_) && // Make the format condition explicit
          (isAnyRaritySelected || selectedRarities.includes(rarity_ as RarityName)) &&
          (isAnyTypeSelected || selectedTypes.includes(type_ as TypeName)) &&
          (isAnyCostSelected ||
            selectedCosts.includes(pp_.toString() as CostName) ||
            (selectedCosts.includes('10+') && pp_ >= 10)) &&
          (isAnyAbilitySelected ||
            selectedAbilities.some(
              (ability) => baseEffect_.includes(ability) || evoEffect_.includes(ability),
            )) &&
          (isAnyAttackSelected ||
            (card.type_ === 'Follower' &&
              (selectedAttacks.includes(card.baseAtk_.toString() as AttackName) ||
                (selectedAttacks.includes('10+') && baseAtk_ >= 10)))) &&
          (isAnyDefenceSelected ||
            (card.type_ === 'Follower' &&
              (selectedDefences.includes(card.baseDef_.toString() as DefenceName) ||
                (selectedDefences.includes('10+') && baseDef_ >= 10)))) &&
          (isAnyTraitSelected || selectedTraits.includes(trait_ as TraitName))
        );
      });
      return filteredCardsData;
    },
  },
});
