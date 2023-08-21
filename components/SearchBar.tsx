import React, { useState } from 'react';

interface SearchBarProps {

  onSelectedLanguagesChange: (languages: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelectedLanguagesChange }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);


  const handleClear = () => {
    setSearchText('');
    setSelectedLanguages([]);
    onSelectedLanguagesChange([]);
   
  };

  const handleRemoveLanguage = (language: string) => {
    const updatedLanguages = selectedLanguages.filter((lang) => lang !== language);
    setSelectedLanguages(updatedLanguages);
    onSelectedLanguagesChange(updatedLanguages);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchText.trim() !== '') {
      const updatedLanguages = [...selectedLanguages, searchText.trim()];
      setSelectedLanguages(updatedLanguages);
      setSearchText('');
      onSelectedLanguagesChange(updatedLanguages);
    }
  };

  return (
    <div className="relative pl-8 w-full xl:px-20">
      <div className="flex flex-wrap items-center gap-3 mx-8 p-3 px-6 border border-gray-300 rounded-md bg-white focus-within:border-blue-500">
        {selectedLanguages.map((language) => (
          <div key={language} className=" bg-gray-200 text-desaturated-dark-cyan text-lg font-bold pl-2 rounded-md">
            {language}
            <button
              className="ml-2 text-xl  text-white text-center px-3 py-1 border-none border-r-4 rounded-r-lg bg-desaturated-dark-cyan hover:bg-very-dark-cyan"
              onClick={() => handleRemoveLanguage(language)}
            >
              X
            </button>
          </div>
        ))}
        <input
          type="text"
          className="flex-grow focus:outline-none   "
          placeholder={ selectedLanguages.length === 0 ? ("Search for languages..."):("")}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {selectedLanguages.length > 0 && (
          <button
            className="text-gray-500 hover:underline "
            onClick={handleClear}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
