import { Header } from 'antd/es/layout/layout';
import Menu from 'antd/es/menu';
const listItem: Array<{ key: string; label: string }> = [
  { key: '1', label: 'Home' },
  { key: '2', label: 'Pokemons' },
];

export const HeaderComponent = () => {
  return (
    <>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={listItem}
        />
      </Header>
    </>
  );
};
