import React from "react";

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  onViewDetails: (id: number) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, types, sprite, onViewDetails }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <div className="relative flex justify-center mb-4">
        <img
          src={sprite}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
        />
        <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          #{id}
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-center text-gray-900 capitalize">{name}</h2>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {types.map((type) => (
          <span
            key={type}
            className="px-4 py-2 text-xs font-semibold text-white rounded-full bg-gray-800 shadow-md"
          >
            {type}
          </span>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => onViewDetails(id)}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg font-semibold shadow-md hover:bg-gray-900 transition duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;