"use client";
import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import PokemonTypeFilter from "./PokemonTypeFilter";

const PokedexGrid: React.FC = () => {
  const [allPokemon, setAllPokemon] = useState<any[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);
  const [availableTypes, setAvailableTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); // Track the search query
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 20;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
        const data = await response.json();

        const detailedPokemon = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              id: details.id,
              name: details.name,
              sprite: details.sprites.front_default,
              types: details.types.map((type: any) => type.type.name),
            };
          })
        );

        setAllPokemon(detailedPokemon);
        setFilteredPokemon(detailedPokemon);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    const fetchTypes = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/type");
        const data = await response.json();
        setAvailableTypes(data.results.map((type: { name: string }) => type.name));
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };

    fetchPokemon();
    fetchTypes();
  }, []);

  useEffect(() => {
    let filtered = allPokemon;

    // Apply type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((type: string) => selectedTypes.includes(type))
      );
    }

    // Apply search filter
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPokemon(filtered);
    setPage(1); // Reset pagination to the first page when filters or search changes
  }, [selectedTypes, searchQuery, allPokemon]);

  const paginatedPokemon = filteredPokemon.slice(
    (page - 1) * pokemonsPerPage,
    page * pokemonsPerPage
  );

  return (
    <div className="container mx-auto p-6">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Pokémon by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Pokémon Type Filter */}
      <PokemonTypeFilter
        availableTypes={availableTypes}
        selectedTypes={selectedTypes}
        onTypeSelect={setSelectedTypes}
      />

      {/* Pokémon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {paginatedPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-md hover:bg-blue-600 disabled:opacity-50 transition-all duration-300"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span className="text-lg font-medium text-gray-700">
          Page {page} of {Math.ceil(filteredPokemon.length / pokemonsPerPage)}
        </span>
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-md hover:bg-blue-600 disabled:opacity-50 transition-all duration-300"
          disabled={page * pokemonsPerPage >= filteredPokemon.length}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokedexGrid;
