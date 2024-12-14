// src/hooks/usePokemonData.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Pokemon } from "../types/Pokemon"; 

const fetchPokemonData = async (page: number): Promise<Pokemon[]> => {
  const limit = 20; // Items per page
  const offset = (page - 1) * limit;
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const pokemonDetails: Pokemon[] = await Promise.all(
    data.results.map(async (pokemon: any) => {
      const details = await axios.get(pokemon.url);
      return {
        id: details.data.id,
        name: details.data.name,
        types: details.data.types.map((t: any) => t.type.name),
        sprite: details.data.sprites.front_default,
      };
    })
  );

  return pokemonDetails;
};

export const usePokemonData = (page: number) => {
  return useQuery<Pokemon[]>({
    queryKey: ["pokemonData", page],
    queryFn: () => fetchPokemonData(page),
  });
};
