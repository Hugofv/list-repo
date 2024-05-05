import React from 'react';
import { FaSearch } from 'react-icons/fa';

import Card from '../Card';
import './style.css';

const SearchInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <Card>
      <div className='search-input-wrap'>
        <input className='search-input' type='text' {...props} />
        <FaSearch className='search-icon' />
      </div>
    </Card>
  );
};

export default SearchInput;
