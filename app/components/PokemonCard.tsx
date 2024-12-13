import React from "react";

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, types, sprite }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <img
        src={sprite}
        alt={name}
        className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
      />
      <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize">{name}</h2>
      <p className="text-center text-gray-500 text-sm mt-1">ID: {id}</p>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {types.map((type) => (
          <span
            key={type}
            className="px-4 py-2 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-md"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
