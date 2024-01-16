import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import Field from '../../../components/Field';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Field
      icon={<IoSearchOutline size={24} />}
      placeholder="Tìm kiếm sản phẩm"
      value={searchValue}
      onChange={handleChange}
      className="w-full"
    />
  );
};

export default Search;
