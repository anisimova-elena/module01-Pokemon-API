import React from "react";
import { NamedAPIResource } from "../interfaces/NamedAPIResource";

export default class PokemonList extends React.Component {
  state = {
    pokemonsList: [],
  };

  fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          pokemonsList: json.results,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  render(): React.ReactNode {
    return this.state.pokemonsList.map(
      (item: NamedAPIResource, index: number) => (
        <div className="card" key={index + 1}>
          <img
            src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
            alt={item.name}
            className="img"
          />
          <div className="text">
            <h4 className="card__name">
              {item.name[0].toUpperCase() + item.name.slice(1)}
            </h4>
            <button className="button card__button" name={item.name}>
              See more
            </button>
          </div>
        </div>
      ),
    );
  }
}
