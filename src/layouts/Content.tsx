import { Layout, Row } from 'antd';
import { HeaderComponent } from './Header';
import { FooterComponent } from './Footer';
import { SearchPokemon } from '../components/SearchPokemon';
import { usePokeStore } from '../store/pokeStore';
import { useEffect } from 'react';
import { PokemonCard } from '../components/PokemonCard';
const { Content } = Layout;
export const MainContent = () => {
  const getAllPokemons = usePokeStore((state) => state.getAllPokemons);

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <>
      <HeaderComponent />
      <Content className="mainContent">
        <h1>Contenido</h1>
        <SearchPokemon />
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <PokemonCard />
        </Row>
      </Content>
      <FooterComponent />
    </>
  );
};
