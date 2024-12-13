import React from "react";

interface PokemonTypeFilterProps {
  availableTypes: string[];
  selectedTypes: string[];
  onTypeSelect: (types: string[]) => void;
}

const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({
  availableTypes,
  selectedTypes,
  onTypeSelect,
}) => {
  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-6">
      {availableTypes.map((type) => (
        <button
          key={type}
          className={`px-5 py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-105 ${
            selectedTypes.includes(type)
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => toggleType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypeFilter;
