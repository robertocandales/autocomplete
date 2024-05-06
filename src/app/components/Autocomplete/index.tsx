import React, { useRef } from 'react';
import { useAutoComplete } from './hooks/useAutoComplete';

interface AutoCompleteProps {
  fetchUrl: string;
  placeholder: string;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ fetchUrl, placeholder = 'placeholder' }) => {
  const {
    inputValue,
    filteredOptions,
    loading,
    showDropdown,
    handleInputChange,
    handleOptionClick,
    setShowDropdown,
    highlightMatch,
    handleInputBlur,
  } = useAutoComplete(fetchUrl);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='autocomplete-container'>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(filteredOptions.length > 0)}
        ref={inputRef}
        placeholder={placeholder}
        className='autocomplete-input'
        onBlur={handleInputBlur}
      />
      {showDropdown && (
        <ul className='autocomplete-options'>
          {loading && <li>Loading...</li>}
          {!loading && filteredOptions.length === 0 && <li>No options found</li>}
          {!loading &&
            filteredOptions.length > 0 &&
            filteredOptions.map((option) => (
              <li key={option.id} onMouseDown={() => handleOptionClick(option.title)}>
                {highlightMatch(option.title)}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
