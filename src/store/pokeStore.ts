import { create } from 'zustand';
import { Pokemon, Result } from '../types';
const API_URL_INDIVIDUAL: string = 'https://pokeapi.co/api/v2/pokemon/';
const API_URL_ALL: string =
  'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500';
interface PokemonStore {
  AllPokemons: Result[];
  PokemonByName: Pokemon[];
  getAllPokemons: () => void;
  getPokemonByName: (pokeName: string) => void;
}
export const usePokeStore = create<PokemonStore>((set) => ({
  AllPokemons: [],
  PokemonByName: [],
  getAllPokemons: async () => {
    const response = await fetch(API_URL_ALL);
    const data = await response.json();
    console.log('desde store', data);
    set({ AllPokemons: data.results });
  },
  getPokemonByName: async (pokeName: string) => {
    const response = await fetch(`${API_URL_INDIVIDUAL}${pokeName}`);
    const data = await response.json();
    console.log(`Pokemon by name: ${pokeName}`, data);
    set((state) => ({
      PokemonByName: [...state.PokemonByName, data],
    }));
  },
}));
