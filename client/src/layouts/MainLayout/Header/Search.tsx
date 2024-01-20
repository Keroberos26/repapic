import { FC, useState } from 'react';
import InputField from '../../../components/InputField';

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <InputField
      placeholder="Tìm kiếm sản phẩm ở đây ..."
      value={searchValue}
      className="text-sm"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default Search;
