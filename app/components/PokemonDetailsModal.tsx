import React from "react";

interface PokemonDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: {
    id: number;
    name: string;
    sprite: string;
    types: string[];
    height: number;
    weight: number;
    abilities: string[];
  } | null;
}

const PokemonDetailsModal: React.FC<PokemonDetailsModalProps> = ({ isOpen, onClose, pokemon }) => {
  if (!isOpen || !pokemon) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 capitalize">{pokemon.name}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">&times;</button>
        </div>
        <div className="flex justify-center mb-4">
          <img src={pokemon.sprite} alt={pokemon.name} className="w-32 h-32 rounded-full object-cover border-4 border-gray-300" />
        </div>
        <div className="text-center mb-4">
          <p className="text-gray-600">ID: {pokemon.id}</p>
          <p className="text-gray-600">Height: {pokemon.height}</p>
          <p className="text-gray-600">Weight: {pokemon.weight}</p>
        </div>
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Types</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {pokemon.types.map((type) => (
              <span key={type} className="px-4 py-2 text-xs font-semibold text-white rounded-full bg-gray-800 shadow-md">
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Abilities</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {pokemon.abilities.map((ability) => (
              <span key={ability} className="px-4 py-2 text-xs font-semibold text-white rounded-full bg-gray-800 shadow-md">
                {ability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsModal;