import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import Card from '../Card';
import './style.css';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (username: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({ onSearch, ...props }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onHandleSearch();
    }
  };

  const onHandleSearch = () => {
    onSearch(search);
  };

  return (
    <Card>
      <div className='search-input-wrap'>
        <input
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
          data-testid='search-input'
          className='search-input'
          type='text'
          {...props}
        />
        <FaSearch
          onClick={onHandleSearch}
          data-testid='search-icon'
          className='search-icon'
        />
      </div>
    </Card>
  );
};

export default SearchInput;
