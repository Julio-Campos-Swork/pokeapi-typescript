import { usePokeStore } from '../store/pokeStore';
import { Card, Col } from 'antd';
import { useEffect, useState } from 'react';
export const PokemonCard = () => {
  const allPokemons = usePokeStore((state) => state.AllPokemons);
  const getPokemonByname = usePokeStore((state) => state.getPokemonByName);
  const PokemonByName = usePokeStore((state) => state.PokemonByName);
  const [pokemonSizeCall, setPokemonSizeCall] = useState(20);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (allPokemons) {
      allPokemons.forEach((pokemon, index) => {
        if (index <= pokemonSizeCall) {
          getPokemonByname(pokemon.name);
          setloading(false);
        }
      });
    } else {
      console.log('No hay pokemons');
      setPokemonSizeCall(20);
      setloading(false);
    }
  }, []);

  return (
    <>
      {allPokemons ? (
        PokemonByName.map((pokemon) => {
          return (
            <>
              <Col className="gutter-box">
                <Card
                  key={pokemon.id}
                  title={pokemon.name}
                  style={{ width: 200 }}
                  loading={loading}
                ></Card>
              </Col>
            </>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
