"use client";
import React, { useState } from "react";
import PokedexGrid from "./components/PokedexGrid";
import PokemonTypeFilter from "./components/PokemonTypeFilter";

const Home = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-300">
        Pokémon Explorer
      </h1>
      <PokemonTypeFilter
        availableTypes={[
          
          
        ]}
        selectedTypes={selectedTypes}
        onTypeSelect={setSelectedTypes}
      />
      <PokedexGrid />
    </div>
  );
};

export default Home;
