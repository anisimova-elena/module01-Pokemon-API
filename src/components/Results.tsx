import React from 'react';
import PokemonList from './PokemonList';
import Pokemon from './PokemonItem';
import { IPokemon } from '../interfaces/Pokemon';
import loader from '../assets/loader.gif';

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
  allPokemons: IPokemon[];
  showAllPokemons: boolean;
}
export default class Results extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchState: loadState.Pending,
      pokemon: {} as IPokemon,
      allPokemons: [] as IPokemon[],
      showAllPokemons: this.props.query ? false : true,
    };
  }

  fetchAllPokemons() {
    this.setState({
      searchState: loadState.Pending,
    });
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          searchState: loadState.Success,
          allPokemons: json.results,
          showAllPokemons: true,
        });
      })
      .catch(function (err) {
        throw new Error(err);
      });
  }

  getPokemon(query: string) {
    this.setState({
      searchState: loadState.Pending,
    });
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
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
            showAllPokemons: false,
          });
        } else {
          this.setState({
            searchState: loadState.BadRequest,
          });
        }
      })
      .catch(function (err) {
        throw new Error(err);
      });
  }

  componentDidMount(): void {
    if (this.state.showAllPokemons) {
      this.fetchAllPokemons();
    } else {
      this.getPokemon(this.props.query);
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.query !== this.props.query) {
      if (!this.props.query) {
        if (this.state.allPokemons) {
          this.setState({
            showAllPokemons: true,
          });
        } else this.fetchAllPokemons();
      } else {
        this.getPokemon(this.props.query);
      }
    }
  }

  render() {
    if (this.state.searchState === loadState.Pending) {
      return (
        <div className="loader">
          <img src={loader} alt="" />
        </div>
      );
    }
    if (this.state.searchState == loadState.BadRequest) {
      return <>Неверный запрос</>;
    }
    if (this.state.searchState == loadState.Success) {
      if (this.state.showAllPokemons) {
        if (this.state.allPokemons) {
          return <PokemonList pokemons={this.state.allPokemons} />;
        }
      }
      return <Pokemon pokemon={this.state.pokemon} />;
    }
  }
}
