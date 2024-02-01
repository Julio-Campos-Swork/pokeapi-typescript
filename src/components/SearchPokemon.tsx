import { Input } from 'antd';
import { getPokemon } from '../services/fetchPokemon';
const { Search } = Input;
export const SearchPokemon = () => {
  const onSearch = (value: string) => getPokemon(value);

  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </>
  );
};
