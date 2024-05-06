import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from './useDebounce';

interface ITodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodo {
  id: number;
  title: string;
}

export const useAutoComplete = (fetchUrl: string) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFromDropdown, setSelectedFromDropdown] = useState(false); // New state

  const debouncedInputValue = useDebounce(inputValue, 300);

  const highlightMatch = (optionValue: string) => {
    const index = optionValue.toLowerCase().indexOf(inputValue.toLowerCase());
    if (index > -1) {
      return (
        <>
          {optionValue.substring(0, index)}
          <span className='highlight'>
            {optionValue.substring(index, index + inputValue.length)}
          </span>
          {optionValue.substring(index + inputValue.length)}
        </>
      );
    }
    return optionValue;
  };

  const handleInputBlur = () => {
    if (!selectedFromDropdown) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const fetchOptions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${fetchUrl}?q=${debouncedInputValue}`);
        if (!response.ok) {
          throw new Error('Failed to fetch options');
        }
        const data: ITodoResponse[] = await response.json();
        setFilteredOptions(data.map((item) => ({ id: item.id, title: item.title })));
        setShowDropdown(data.length > 0 && debouncedInputValue !== '');
      } catch (error) {
        console.error('Error fetching options:', error);
      } finally {
        setLoading(false);
      }
    };

    if (debouncedInputValue && !selectedFromDropdown) {
      fetchOptions();
    } else {
      setFilteredOptions([]);
      setShowDropdown(false);
    }
  }, [debouncedInputValue, fetchUrl, selectedFromDropdown]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSelectedFromDropdown(false);
  }, []);

  const handleOptionClick = (title: string) => {
    setInputValue(title);
    setShowDropdown(false);
    setSelectedFromDropdown(true);
  };

  return {
    inputValue,
    setInputValue,
    filteredOptions,
    loading,
    showDropdown,
    handleInputChange,
    handleOptionClick,
    setShowDropdown,
    highlightMatch,
    handleInputBlur,
  };
};
