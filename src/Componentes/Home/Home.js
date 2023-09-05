import React, { useState } from "react";
import Logo from "../../Imagens/Logo.png";

function SearchBar() {
  const alimentos = [
    "Banana",
    "Maçã",
    "Laranja",
    "Morango",
    "Uva",
    "Pêra",
    "Mamão",
    "Kiwi",
    "Melancia",
    "Abacaxi",
    "Carne",
    "Feijão",
    "Arroz",
    "Macarrão",
    "Peixe",
    "Frango",
    "Ovo",
    "Leite",
    "Queijo",
    "Iogurte",
    "Azeite",
    "Manteiga",
    "Açúcar",
    "Sal",
    "Café",
    "Suco",
    "Refrigerante",
    "Bolo",
    "Biscoito",
  ];

  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const filtered = alimentos.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      setChips([...chips, inputValue]);
      setInputValue("");
      setSuggestions([]);
    }
  };

  const handleRemoveChip = (index) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };

  const addSuggestionToChips = (suggestion) => {
    setChips([...chips, suggestion]);
    setInputValue("");
    setSuggestions([]);
  };

  return (
    <div className="flex flex-col w-full max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto justify-start items-center space-y-4 p-4 sm:p-8 mt-32 md:mt-0">
      <img
        src={Logo}
        alt="Logo CookShow"
        className="h-[140px] md:h-[200px] w-auto mb-2"
      />

      <div className="w-full">
        <div className="flex flex-wrap items-center border-2 border-orange-500 rounded-lg p-2">
          <span className="text-lg mr-2">🔍</span>
          {chips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center bg-orange-500 text-white rounded-xl px-2 m-1"
            >
              <span>{chip}</span>
              <button
                onClick={() => handleRemoveChip(index)}
                className="ml-2 text-white"
              >
                x
              </button>
            </div>
          ))}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Digite os alimentos desejados..."
            className="p-1 flex-1 min-w-0 focus:outline-none"
          />
        </div>
        {suggestions.length > 0 && (
          <div className="mt-2 bg-gray-100 rounded-md shadow">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-2 border-t border-gray-300 cursor-pointer text-orange-500 hover:bg-gray-200"
                onClick={() => addSuggestionToChips(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
