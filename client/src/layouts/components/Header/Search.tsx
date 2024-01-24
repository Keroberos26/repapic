import { FC, useState } from 'react';
import InputField from '../../../components/InputField';
import { GoSearch } from 'react-icons/go';

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <InputField
      buttonTitle={<GoSearch />}
      placeholder="Tìm kiếm sản phẩm ở đây ..."
      value={searchValue}
      className="text-sm"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default Search;
