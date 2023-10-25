import React from "react";
import PokemonList from "./PokemonList";
import Pokemon from "./PokemonItem";
import { IPokemon } from "../interfaces/Pokemon";

enum loadState {
  Pending,
  Success,
  BadRequest,
}

interface Props {
  query: string;
}
interface State {
  searchState: loadState;
  pokemon: IPokemon;
}
export default class Results extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchState: loadState.Pending,
      pokemon: {} as IPokemon,
    };
  }

  getPokemon(name: string) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          this.setState({
            searchState: loadState.BadRequest,
          });
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        if (json) {
          this.setState({
            searchState: loadState.Success,
            pokemon: json,
          });
        } else {
          this.setState({
            searchState: loadState.BadRequest,
          });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.query !== prevProps.query ) {
      this.getPokemon(this.props.query);
      this.setState({
        searchState: loadState.Pending,
      });
    }
  }

  render() {
    if (!this.props.query) {
      return (
        <main className="container main__container">
          <PokemonList />
        </main>
      );
    }
    if (this.state.searchState === loadState.Pending) {
      return <>Идёт загрузка</>;
    }
    if (
      this.state.searchState == loadState.Success &&
      this.state.pokemon !== undefined
    ) {
      return <Pokemon pokemon={this.state.pokemon} />;
    }
    if (this.state.searchState == loadState.BadRequest) {
      return <>Неверный запрос</>;
    }
  }
}
