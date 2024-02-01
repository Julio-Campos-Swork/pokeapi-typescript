let API_URL_BASE: string = 'https://pokeapi.co/api/v2/pokemon/';
import { Pokemon } from '../types';
export const getPokemon = async (pokemon: string) => {
  let data: Pokemon[] = [];
  let error;
  try {
    const response = await fetch(`${API_URL_BASE}${pokemon}`);
    data = await response.json();
    error = false;
  } catch {
    console.log('error el pokemon no eexiste');

    error = true;
  }
  return { data, error };
};
