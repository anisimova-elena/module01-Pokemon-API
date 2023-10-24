import { useState } from "react";
import PokemonList from "./PokemonList";
import Pokemon from "./PokemonItem";

enum loadState {
  Pending,
  Success,
  BadRequest,
}

interface Props {
  query: string;
}

export default function Results(props: Props) {
  const [pokemon, setPokemon] = useState();
  const [searchState, setSearchState] = useState(loadState.Pending);


  function getPokemon(name: string) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          setSearchState(loadState.BadRequest);
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        if (json) {
          setPokemon(json);
          setSearchState(loadState.Success);
        } else {
          setSearchState(loadState.BadRequest);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  if (!props.query) {
    return (
      <main className="container main__container">
        <PokemonList />
      </main>
    );
  }
  getPokemon(props.query);
  if (searchState === loadState.Pending) {
    return <>Идёт загрузка</>;
  }
  if (searchState == loadState.Success && pokemon !== undefined) {
    return <Pokemon pokemon={pokemon} />;
  }
  if (searchState == loadState.BadRequest) {
    return <>Неверный запрос</>;
  }
}
